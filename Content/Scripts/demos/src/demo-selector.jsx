const React = require('react')
const ReactUMG = require('react-umg')
const {ltrb} = require('../lib/utils')

const font = {
    FontObject : GEngine.SmallFont,
    Size : 15
}

class DemoSelector extends React.Component {
    render() {
        let {scenes,done} = this.props
        return (
            <div>
                <uBorder
                    BrushColor={{A:0.4}}
                    Padding={ltrb(20,10)}
                >
                    <span>
                        <text Text="Demo scene"/>
                        {scenes.map(x => (
                            <uButton key={x} OnClicked={() => done(x)}>
                                <text Font={font} Text={x}/>
                            </uButton>
                        ))}
                    </span>
                </uBorder>
            </div>
        )
    }
}

module.exports = async function (defer,scenes) {
    let comp
    let p = new Promise(resolve => {
        comp = ReactUMG.wrap(<DemoSelector scenes={scenes} done={resolve}/>)
    })
    function close() {
        if (!comp) return
        comp.RemoveFromViewport()
    }
    comp.AddToViewport()
    defer(close)
    return await p
}