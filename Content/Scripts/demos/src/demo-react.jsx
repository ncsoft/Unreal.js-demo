/// <reference path="typings/ue.d.ts">/>

let viewport_widget = require('./lib/viewport-widget')
let npm = require('./lib/npm')

function application(elem) {
    const React = require('react')
    const ReactUMG = require('react-umg')
    const {palette} = require('google-material-color')
    const {hex2lc, ltrb} = require('./lib/utils')

    let RemoteImage = require('./remote-image')
    let DragAndDrop = require('./drag-and-drop')
    let Timer = require('./timer')
    let Radar = require('./radar')
    let Stateful = require('./stateful')    
    let SimpleBinding = require('./simple-binding')

    console.log(SimpleBinding)

    const font = {
        FontObject: GEngine.SmallFont,
        Size: 15
    }

    class Window extends React.Component {
        render() {
            let C = palette.Indigo
            let {title, children, depth} = this.props
            depth = depth || 0
            return (
                <uBorder
                    {...this.props}
                    Padding={ltrb(0)}
                    BrushColor={hex2lc(C[100 + depth * 100], 0.75)}>
                    <div>
                        <uBorder
                            Padding={ltrb(20, 10)}
                            BrushColor={hex2lc(C[500 + depth * 100])}
                            >
                            <text
                                ColorAndOpacity={{ SpecifiedColor: { R: 1, G: 1, B: 1, A: 1 } }}
                                Text={title}
                                Font={{
                                    FontObject: font.FontObject,
                                    Size: Math.floor(20 * Math.pow(0.8, depth))
                                }} />
                        </uBorder>
                        <uBorder
                            BrushColor={{ A: 0 }}
                            Padding={ltrb(0, 4)}>
                            {this.props.children}
                        </uBorder>
                    </div>
                </uBorder>
            )
        }
    }

    class ImageDemo extends React.Component {
        render() {
            return <RemoteImage
                width={128}
                height={128}
                url={"https://pbs.twimg.com/profile_images/593636604482228224/mWPsqBsm.jpg"}
                />
        }
    }

    let component = ReactUMG.render(
        <uBorder
            Padding={{ Left: 100, Top: 100, Right: 100, Bottom: 100 }}
            BrushColor={{ A: 0 }}>
            <Window title="Hello React-UMG">
                <div>
                    <span>
                        <Window title="Tick" depth={1}>
                            <Timer />
                        </Window>
                        <uSpacer Size={{ X: 4 }} />
                        <Window title="Custom" depth={1}>
                            <Radar size={128} />
                        </Window>
                        <uSpacer Size={{ X: 4 }} />
                        <Window title="Drag and drop" depth={1}>
                            <uSizeBox WidthOverride={250} HeightOverride={150}>
                                <DragAndDrop Font={font} />
                            </uSizeBox>
                        </Window>
                        <uSpacer Size={{ X: 4 }} />
                        <Window title="Image" depth={1}>
                            <ImageDemo />
                        </Window>
                    </span>
                    <span>
                        <Window title="Binding" depth={1}>
                            <SimpleBinding />
                        </Window>
                        <uSpacer Size={{ X: 4 }} />
                        <Window title="Stateful" depth={1}
                            Slot={{ Size: { SizeRule: 'Fill' } }}>
                            <Stateful />
                        </Window>
                    </span>
                </div>
            </Window>
        </uBorder>
        ,
        elem)

    return function () {
        ReactUMG.unmountComponent(component)
    };
}

async function demo(defer) {
    let elem = viewport_widget()

    await npm('react-umg')
    await npm('google-material-color')
    await npm('hex-rgb')

    let destroy = application(elem)
    defer(_ => {
        destroy()
        elem.destroy()
    })
}

module.exports = demo