const _ = require('lodash')
const ReactUMG = require('react-umg')
const React = require('react')

module.exports = function (E) {
    function getGraphModules(container) {
        let obj = new JavascriptObject
        
        let graph = JavascriptGraphEditorWidget.NewGraph(obj)
        let schema = graph.Schema.GetDefaultObject()

        let nodes = []
        schema.OnTakeWidget = [
            (node) => {
                let ref = node.GraphNode.Ref.get()
                return ReactUMG.wrap(
                    <div>
                        <text Text="Node" />
                        <text Text={String(ref.Text)} />
                    </div>
                ).TakeWidget()
            }
        ]
        let contextMenus = []
        schema.OnBuildMenu = [
            (builder) => {
                let { GraphPin, GraphNode } = builder
                if (GraphPin.IsValid()) {
                    builder.BeginSection("Hello")
                    let linkedTo = GraphPin.GetLinkedTo()
                    if (linkedTo.length) {
                        for (let x of linkedTo) {
                            let menu = new JavascriptMenuContext()
                            menu.Description = "Break pin!"
                            menu.ToolTip = "핀을 끊어요!"
                            menu.OnExecute = () => {
                                console.log("BREAK!!!")
                                schema.BreakSinglePinLink(GraphPin, x)
                            }
                            contextMenus.push(menu)
                            builder.AddMenuEntry(menu)
                        }
                    }
                    builder.EndSection()
                } else if (builder.GraphNode) {
                    builder.BeginSection("Hello")
                    builder.AddToolBarButton(JavascriptMenuLibrary.GenericCommand("Delete"))
                    builder.AddToolBarButton(JavascriptMenuLibrary.GenericCommand("Cut"))
                    builder.AddToolBarButton(JavascriptMenuLibrary.GenericCommand("Copy"))
                    builder.AddToolBarButton(JavascriptMenuLibrary.GenericCommand("Duplicate"))
                    builder.EndSection()
                }
            }
        ]
        schema.OnContextActions = [
            () => [

            ]
        ]
        schema.OnPerformAction = [
            (action, context) => {
                console.log('perform', action.MenuDescription, context)
                let { ParentGraph, FromPins, Location } = context

                let Graph = ParentGraph.GetOuter()

                $execTransaction('Javascript graph editor: New node', () => {
                    ParentGraph.ModifyObject();
                    Graph.ModifyObject();

                    let NewNode = new JavascriptObject(Graph);
                    nodes.push(NewNode)
                    NewNode.Ref = {
                        Text: action.MenuDescription,
                        Inputs: ["입력"],
                        Outputs: ["출력"]
                    }

                    Graph.AllNodes.push(NewNode)

                    let NodeCreator = Graph.EdGraph.NodeCreator()
                    let GraphNode = NodeCreator.Node
                    GraphNode.BackgroundColor.SpecifiedColor = { R: 1, G: 0, B: 0, A: 1 }
                    GraphNode.GraphNode = NewNode
                    GraphNode.NodeComment = "Created by javascript"
                    NodeCreator.Finalize()

                    GraphNode.NodePosX = Location.X
                    GraphNode.NodePosY = Location.Y

                    GraphNode.AutowireNewNode(FromPins[0])

                    Graph.PostEditChange()
                    Graph.MarkPackageDirty()
                })
            }
        ]
        schema.OnCanCreateConnection = [
            (a, b) => {
                function check_cycle() {
                    let visited = [a.GetOwningNode()]
                    function visit(b) {
                        if (visited.indexOf(b) >= 0) return true
                        visited.push(b)
                        return _.some(b.GetPins(), p => p.GetDirection() == 'EGPD_Output' &&
                            _.some(p.GetLinkedTo(), pp => pp && visit(pp.GetOwningNode()))
                        )
                    }
                    return !visit(b.GetOwningNode())
                }
                if (a.GetOwningNode() == b.GetOwningNode()) {
                    return { Response: 'CONNECT_RESPONSE_DISALLOW', Message: '같은 노드인데요...' }
                }
                if (a.GetDirection() == b.GetDirection()) {
                    return { Response: 'CONNECT_RESPONSE_DISALLOW', Message: '뱡향이 같은 것끼리는 안됩니다.' }
                }
                if (!check_cycle()) {
                    return { Response: 'CONNECT_RESPONSE_DISALLOW', Message: 'Cycle!...' }
                }
                if (a.GetPinName() == "가위" && b.GetPinName() != "이겼다") {
                    return { Response: 'CONNECT_RESPONSE_DISALLOW', Message: '가위 - 이겼다!...' }
                }
                return { Response: 'CONNECT_RESPONSE_MAKE', Message: 'OK' }
            }
        ]

        schema.OnAllocateDefaultPins = [
            (node) => {
                let ref = node.GraphNode.Ref.get()
                if (ref && ref.Inputs) {
                    ref.Inputs.forEach(pin =>
                        node.CreatePin('EGPD_Input', 'PinCategory_MultipleNodes', '', null, false, false, pin)
                    )
                }
                if (ref && ref.Outputs) {
                    ref.Outputs.forEach(pin =>
                        node.CreatePin('EGPD_Output', 'PinCategory_MultipleNodes', '', null, false, false, pin)
                    )
                }
            }
        ]

        obj.EdGraph = graph



        function makeGraphCommands() {
            let context = JavascriptMenuLibrary.NewBindingContext('GraphEditor', 'GraphEditorMenu', '', 'EditorStyle');
            let commands = new JavascriptUICommands

            function init() {
                commands.BindingContext = context
                commands.Commands = "SelectAll Delete Copy Cut Paste Duplicate".split(' ').map(x => ({
                    Id: x,
                    CommandInfo: JavascriptMenuLibrary.GenericCommand(x)
                }))
                commands.Initialize();
            }

            commands.OnExecuteAction = (what) => {
                let commands = {
                    Delete: () => {
                        if (container) {
                            graph.ModifyObject()

                            let nodes = container.ueobj.GetSelectedNodes()
                            nodes.forEach(node => {
                                if (node.CanUserDeleteNode()) {
                                    node.ModifyObject()
                                    node.DestroyNode()
                                }
                            })
                            container.ueobj.ClearSelectionSet()
                        }
                    },
                    SelectAll: () => {
                        if (container) {
                            container.ueobj.SelectAllNodes()
                        }
                    }
                }
                let cmd = commands[what]
                if (!cmd) {
                    throw new Error(what)
                }
                cmd()
            }

            commands.OnCanExecuteAction = (what) => {
                let commands = {
                    Delete: () => {
                        let nodes = container != null ? container.ueobj.GetSelectedNodes() : []
                        return _.some(nodes, node => node.CanUserDeleteNode())
                    },
                    Copy: () => {
                        let nodes = container != null ? container.ueobj.GetSelectedNodes() : []
                        return _.some(nodes, node => node.CanDuplicateNode())
                    },
                    Cut: () => commands.Copy && commands.Delete
                }
                let cmd = commands[what]
                return !cmd || cmd()
            }

            function uninit() {
                commands.Uninitialize();
                context.Destroy();
            }

            init();
            commands.destroy = uninit

            return commands
        }

        let graphCommands = makeGraphCommands()
        let graphCommandList = JavascriptMenuLibrary.CreateUICommandList()
        graphCommands.Bind(graphCommandList)

        return {
            graph: graph,
            graphCommandList: graphCommandList,
            nodes: nodes,
            destroy: () => {
                nodes.forEach(node => node.Ref = null)
                graphCommands.destroy()
            }
        }
    }

    class GraphEditor extends React.Component {
        constructor(props, context) {
            super(props, context)
            let { graph, graphCommandList, nodes, destroy } = getGraphModules(this.graphContainer);
            this.graph = graph;
            this.graphCommandList = graphCommandList
            this.nodes = nodes
            this.destroy = destroy
        }

        componentWillMount() {
            this.LoadGraph()
        }

        componentWillUnmount() {
            this.destroy()
        }

        LoadGraph() {
            // {
            //     function node(opts = {}) {
            //         let node = new JavascriptObject(obj)
            //         node.NodeType = PlayerController.StaticClass
            //         node.CustomNodeTitle = "헬로"
            //         node.Ref = {
            //             Text: "기본",
            //             Inputs: ["가위","바위","보"],
            //             Outputs: ["이겼다","졌다"]
            //         }
            //         nodes.push(node)

            //         obj.AllNodes = [node]

            //         let c = graph.NodeCreator()
            //         c.Node.GraphNode = node
            //         c.Node.BackgroundColor.SpecifiedColor = {R:1,G:0,B:0.3,A:1}
            //         c.Node.NodeComment = "Created by javascript"
            //         _.each(opts,(v,k) => {
            //             c.Node[k] = v
            //         })
            //         c.Finalize()
            //         schema.SetNodeMetaData(c.Node,'DefaultGraphNode')
            //         return c.Node
            //     }

            //     let a = node({NodePosY:-300,Temp:'X'})
            //     let b = node()
            //     let input = a.GraphNode.Ref.get().Inputs[0]
            //     let output = a.GraphNode.Ref.get().Outputs[0]
            //     let x = a.FindPin(input,'EGPD_Input')
            //     let y = b.FindPin(output,'EGPD_Output')
            //     x.MakeLinkTo(y)
            // }
        }

        render() {
            return (
                <uSizeBox>
                    <uJavascriptGraphEditorWidget
                        ref={ref => this.graphContainer = ref}
                        CommandList={this.graphCommandList}
                        AppearanceInfo={{ CornerText: "Hello BT" }}
                        OnSelectedNodesChanged={nodes => E.emit('OnSelectedNodesChanged', nodes)}
                    />
                </uSizeBox>
            )
        }
    }

    return ReactUMG.wrap(<GraphEditor />)
}