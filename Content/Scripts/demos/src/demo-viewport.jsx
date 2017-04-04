const React = require('react')
const ReactUMG = require('react-umg')
const _ = require('lodash')

module.exports = function viewportDesign(E) {
    const tags = ["PCG"]

    let json2u = require('./json2u')()	

    function get_engine() {
        return Root.GetEngine()
    }

    function get_world() {
        return get_engine().GetEditorWorld()
    }

    function generate_spiral(world, opts) {
        const mesh = opts.mesh || StaticMesh.Load('/Engine/BasicShapes/Sphere')
        const mtrl = opts.mtrl || Material.Load('/Game/Color.Color')
        
        let N = opts.N || 10
        let num_spirals = opts.num_spirals || 5
        let radius = opts.radius || 200
        let height = opts.height || 200 * 5
        purge(world)  
        let actors = [];
        for (let i = 0; i < N; ++i) {
            let v = i / N
            let u = v * num_spirals * 2 * Math.PI
            let t = {
                Translation: {
                    X: Math.sin(u) * radius,
                    Y: Math.cos(u) * radius,
                    Z: v * height
                }
            }
            let color = {
                R: t.Translation.X * 2 + 1,
                G: t.Translation.Y * 2 + 1,
                B: v, 
                A: 1
            } 
            let mi = world.CreateDynamicMaterialInstance(mtrl)
            mi.SetVectorParameterValue('color', color)
            let sma = StaticMeshActor.C(world.BeginSpawningActorFromClass(StaticMeshActor, t, false))
            sma.StaticMeshComponent.SetMobility('Movable')
            sma.StaticMeshComponent.StaticMesh = mesh			
            sma.StaticMeshComponent.SetMaterial(0, mi)
            sma.StaticMeshComponent.ReregisterComponent()
            sma.FinishSpawningActor(t)
            sma.Tags = tags
            actors.push(sma)
        }
        return actors;
    }
    
    function purge(world) {
        let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors  
        prev_actors.forEach((actor) => world.EditorDestroyActor(actor))  
    }

    class ViewportDesign extends React.Component {
        componentDidMount() {
            let viewport = JavascriptEditorViewport.C(this.Viewport.ueobj)
            process.nextTick(__ => {
                let obj = _.fromPairs(viewport.GetEngineShowFlags().split(',').map(x => x.split('=')))
                obj.GameplayDebug = 0
                obj.SelectionOutline = 1
                viewport.SetEngineShowFlags(_.map(obj, (v, k) => [k, v].join('=')).join(','))
                viewport.SetRealtime(true, false)
                viewport.SetSimulatePhysics(true)
                viewport.SetViewLocation({ Z: 300, X: 600, Y: 600 })
                viewport.SetViewRotation({ Pitch: -10, Yaw: 225 })
                viewport.SetProfileIndex(0)
                if (viewport.GetFloorMeshComponent()) {
                    viewport.GetFloorMeshComponent().SetVisibility(false, true);
                }
                this.draw = this.draw.bind(this);
                E.addListener('updateData', this.draw);
                E.addListener('choose', this.draw);
            });

        }

        draw(objects = []) {
            let viewport = JavascriptEditorViewport.C(this.Viewport.ueobj)
            let world = viewport.GetViewportWorld();
            purge(world)
            this.data = objects.length > 0 ? objects[0] : null
            if (this.data) {
                generate_spiral(world, this.data)
            }
            viewport.Redraw()            

        }
        
        componentWillUnmount() {
            let viewport = JavascriptEditorViewport.C(this.Viewport.ueobj)
            let world = viewport.GetViewportWorld();
            purge(world)            
            E.removeListener('updateData', this.draw);
        }

        render() {
            let viewportStyle = {
                OnGetWidgetMode: elem => 'WM_None',
                OnClick: (_event, proxy, elem) => {
                    E.emit('choose', [this.data])
                }
            }

            return (
                <uSizeBox HeigthOverride={600}>
                    <uJavascriptEditorViewport ref={ref=> this.Viewport = ref} {...viewportStyle}/>
                </uSizeBox>
            )
        }
    }

    return ReactUMG.wrap(<ViewportDesign/>)
}