const React = require('react');
const ReactUMG = require('react-umg');
const { ltrb } = require('../lib/utils');

const font = {
    FontObject: GEngine.SmallFont,
    Size: 15
};

class DemoSelector extends React.Component {
    render() {
        let { scenes, done } = this.props;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'uBorder',
                {
                    BrushColor: { A: 0.4 },
                    Padding: ltrb(20, 10)
                },
                React.createElement(
                    'span',
                    null,
                    React.createElement('text', { Text: 'Demo scene' }),
                    scenes.map(x => React.createElement(
                        'uButton',
                        { key: x, OnClicked: () => done(x) },
                        React.createElement('text', { Font: font, Text: x })
                    ))
                )
            )
        );
    }
}

module.exports = async function (defer, scenes) {
    let comp;
    let p = new Promise(resolve => {
        comp = ReactUMG.wrap(React.createElement(DemoSelector, { scenes: scenes, done: resolve }));
    });
    function close() {
        if (!comp) return;
        comp.RemoveFromViewport();
    }
    comp.AddToViewport();
    defer(close);
    return await p;
};