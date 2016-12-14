/// <reference path="typings/ue.d.ts">/>

let viewport_widget = require('./lib/viewport-widget')
let npm = require('./lib/npm')
let _ = require('lodash')
const uclass = require('uclass')().bind(this,global)

function application(elem) {
    const React = require('react')
    const ReactUMG = require('react-umg')

    let DragAndDrop = require('./drag-and-drop')

    class MyComponent extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.state = { text: "MyComponent" }
        }

        OnTextChanged(value) {
            this.setState({ text: value })
        }

        render() {
            return (
                <div>
                    <uEditableTextBox
                        Text={this.state.text}
                        OnTextChanged={value => this.OnTextChanged(value)} />
                    <text Text={this.state.text} />
                </div>
            )
        }
    }

    class ListItem extends React.Component {
        render() {
            if (this.props.removed) return (
                <span>
                    <text Text={'removed item'} />
                </span>
            )
            return (
                <span>
                    <text
                        Slot={{ Size: { SizeRule: 'Fill' } }}
                        Text={'item_' + this.props.data}
                        />
                    <uButton
                        OnClicked={this.props.remove}
                        >
                        <text Text="Delete" />
                    </uButton>
                </span>
            )
        }
    }

    class RadarWidget extends JavascriptWidget {
        properties() {
            this.size/*int*/;
        }
        OnPaint(context) {
            let s = this.size
            let r = s/2
            let t = $time
            let dx = r * Math.cos(t)
            let dy = r * Math.sin(t)
            context.DrawLine({X:r,Y:r},{X:r+dx,Y:r+dy},{R:1,A:1},true)
        }
    }
    let Radar_C = uclass(RadarWidget)
    ReactUMG.Register('uRadar',Radar_C)

    class Radar extends React.Component {
        render() {
            return (
                <uSizeBox WidthOverride={this.props.size} HeightOverride={this.props.size}>
                    <uBorder>
                        <uRadar size={this.props.size}/>
                    </uBorder>
                </uSizeBox>
            )
        }
    }

    class Timer extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.state = { count: 1 }
        }
        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 50)
        }
        componentWillUnmount() {
            clearInterval(this.interval)
        }
        tick() {
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return (
                <span>
                    <text Text={new Date().toISOString()} />
                </span>
            )
        }
    }

    class Stateful extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.state = { count: 50, color: { R: 1, G: 0, B: 0, A: 1 }, removed: [] }
        }

        OnTextChanged(value) {
            this.setState({ count: parseInt(value) || 0 })
        }

        onClicked() {
            this.setState({ color: { R: Math.random(), G: Math.random(), B: Math.random(), A: 1 } })
        }

        render() {
            return (
                <div>
                    <uButton
                        BackgroundColor={this.state.color}
                        OnClicked={this.onClicked.bind(this)} />
                    <uEditableTextBox
                        Text={this.state.count}
                        OnTextChanged={value => this.OnTextChanged(value)} />
                    <text Text={'item-count: ' + this.state.count} />
                    <uSizeBox HeightOverride={400}>
                        <uScrollBox>
                            {_.times(this.state.count, i => (
                                <ListItem
                                    key={i}
                                    data={i}
                                    removed={this.state.removed.indexOf(i) >= 0}
                                    remove={() => { this.setState({ removed: [...this.state.removed, i] }) } }
                                    />
                            )
                            )}
                        </uScrollBox>
                    </uSizeBox>
                </div>
            )
        }
    }

    let component = ReactUMG.render(
        <uBorder Padding={{ Left: 100, Top: 100, Right: 10, Bottom: 10 }} BrushColor={{ R: 1, G: 1, B: 1, A: 0.2 }}>
            <div>
                <text
                    ColorAndOpacity={{ SpecifiedColor: { R: 0, G: 0, B: 1, A: 1 } }}
                    Text="HELLO React-UMG!" />
                <span>
                    <Timer />
                    <Radar size={100}/>
                    <DragAndDrop />                    
                </span>                
                <MyComponent />
                <Stateful />
            </div>
        </uBorder>,
        elem)

    return function () {
        ReactUMG.unmountComponent(component)
    };
}

async function demo(defer) {
    let elem = viewport_widget()

    await npm('react-umg')
    let destroy = application(elem)
    defer(_ => {
        destroy()
        elem.destroy()
    })
}

module.exports = demo