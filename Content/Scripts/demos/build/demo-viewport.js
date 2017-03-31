var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const React = require('react');
const ReactUMG = require('react-umg');
const _ = require('lodash');

let schema = {
    "title": "SpiralMetaData",
    "type": "object",
    "properties": {
        "desc": {
            "type": "string"
        },
        "mesh": {
            "type": "StaticMesh"
        },
        "mtrl": {
            "type": "Material"
        },
        "N": {
            "type": "integer"
        },
        "height": {
            "type": "float"
        },
        "num_spirals": {
            "type": "integer"
        },
        "radius": {
            "type": "float"
        },
        "test": {
            "type": "array",
            "items": {
                "title": "TestStruct",
                "type": "object",
                "struct": "true",
                "properties": {
                    "A": {
                        "type": "integer"
                    },
                    "B": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "required": ["N", "height", "num_spirals", "radius"]
};

module.exports = function viewportDesign(E) {
    const tags = ["PCG"];

    let json2u = require('./json2u')();
    let meta = json2u.create('spiral', schema);

    function get_engine() {
        return Root.GetEngine();
    }

    function get_world() {
        return get_engine().GetEditorWorld();
    }

    function gen() {
        let data = new meta();
        data.num_spirals = 10;
        data.radius = Math.random() * 300 + 100;
        data.N = 100;
        data.height = Math.random() * 800 + 200;
        data.mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere');
        data.mtrl = Material.Load('/Game/Color.Color');
        data.desc = Math.random().toString(16);
        return data;
    }

    function generate_spiral(world, opts) {
        const mesh = opts.mesh;
        const mtrl = opts.mtrl;

        let N = opts.N || 10;
        let num_spirals = opts.num_spirals || 5;
        let radius = opts.radius || 200;
        let height = opts.height || 200 * 5;
        purge(world);
        let actors = [];
        for (let i = 0; i < N; ++i) {
            let v = i / N;
            let u = v * num_spirals * 2 * Math.PI;
            let t = {
                Translation: {
                    X: Math.sin(u) * radius,
                    Y: Math.cos(u) * radius,
                    Z: v * height
                }
            };
            let color = {
                R: t.Translation.X * 2 + 1,
                G: t.Translation.Y * 2 + 1,
                B: v,
                A: 1
            };
            let mi = world.CreateDynamicMaterialInstance(mtrl);
            mi.SetVectorParameterValue('color', color);
            let sma = StaticMeshActor.C(world.BeginSpawningActorFromClass(StaticMeshActor, t, false));
            sma.StaticMeshComponent.SetMobility('Movable');
            sma.StaticMeshComponent.StaticMesh = mesh;
            sma.StaticMeshComponent.SetMaterial(0, mi);
            sma.StaticMeshComponent.ReregisterComponent();
            sma.FinishSpawningActor(t);
            sma.Tags = tags;
            actors.push(sma);
        }
        return actors;
    }

    function purge(world) {
        let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors;
        prev_actors.forEach(actor => world.EditorDestroyActor(actor));
    }

    class ViewportDesign extends React.Component {
        componentDidMount() {
            let viewport = JavascriptEditorViewport.C(this.Viewport.ueobj);
            process.nextTick(__ => {
                let obj = _.fromPairs(viewport.GetEngineShowFlags().split(',').map(x => x.split('=')));
                obj.GameplayDebug = 0;
                obj.SelectionOutline = 1;
                viewport.SetEngineShowFlags(_.map(obj, (v, k) => [k, v].join('=')).join(','));
                viewport.SetRealtime(true, false);
                viewport.SetSimulatePhysics(true);
                viewport.SetViewLocation({ Z: 300, X: 600, Y: 600 });
                viewport.SetViewRotation({ Pitch: -10, Yaw: 225 });
                viewport.SetProfileIndex(0);
                if (viewport.GetFloorMeshComponent()) {
                    viewport.GetFloorMeshComponent().SetVisibility(false, true);
                }
                this.data = gen();
                E.on('updateData', () => {
                    this.draw();
                });
                E.emit('choose', this.data);
                this.draw();
            });
        }

        draw() {
            let viewport = JavascriptEditorViewport.C(this.Viewport.ueobj);
            let world = viewport.GetViewportWorld();
            purge(world);
            generate_spiral(world, this.data);
            viewport.Redraw();
        }

        componentWillUnmount() {
            let viewport = JavascriptEditorViewport.C(this.Viewport.ueobj);
            let world = viewport.GetViewportWorld();
            purge(world);
        }

        render() {
            let viewportStyle = {
                OnGetWidgetMode: elem => 'WM_None',
                OnClick: (_event, proxy, elem) => {
                    E.emit('choose', this.data);
                }
            };

            return React.createElement(
                'uSizeBox',
                { HeigthOverride: 600 },
                React.createElement('uJavascriptEditorViewport', _extends({ ref: ref => this.Viewport = ref }, viewportStyle))
            );
        }
    }

    return ReactUMG.wrap(React.createElement(ViewportDesign, null));
};