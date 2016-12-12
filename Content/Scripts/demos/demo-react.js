let viewport_widget = require('./lib/viewport-widget')
let npm = require('./lib/npm')

async function demo(defer) {
    let elem = viewport_widget()
    defer(_ => elem.destroy())

    await npm('react-umg')
    let ReactUMG = require('react-umg')
    let React = require('react')

    let component = ReactUMG.render(
        React.createElement("uBorder",{Padding:{Left:100,Top:100},BrushColor:{A:0.2}},
            React.createElement("div",{},
                React.createElement("text",{Text:"Hello. React-UMG"})
            )
        ),
        elem
    )
    defer(_ => ReactUMG.unmountComponent(component))
}

module.exports = demo