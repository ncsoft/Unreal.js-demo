/// <reference path="typings/ue.d.ts">/>

let viewport_widget = require('./lib/viewport-widget');
let npm = require('./lib/npm');
let _ = require('lodash');

function application(elem) {
    const React = require('react');
    const ReactUMG = require('react-umg');

    class MyComponent extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.state = { text: "MyComponent" };
        }

        OnTextChanged(value) {
            this.setState({ text: value });
        }

        render() {
            return React.createElement(
                'div',
                null,
                React.createElement('uEditableTextBox', {
                    Text: this.state.text,
                    OnTextChanged: value => this.OnTextChanged(value) }),
                React.createElement('text', { Text: this.state.text })
            );
        }
    }

    class ListItem extends React.Component {
        render() {
            if (this.props.removed) return React.createElement(
                'span',
                null,
                React.createElement('text', { Text: 'removed item' })
            );
            return React.createElement(
                'span',
                null,
                React.createElement('text', {
                    Slot: { Size: { SizeRule: 'Fill' } },
                    Text: 'item_' + this.props.data
                }),
                React.createElement(
                    'uButton',
                    {
                        OnClicked: this.props.remove
                    },
                    React.createElement('text', { Text: 'Delete' })
                )
            );
        }
    }

    class Timer extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.state = { count: 1 };
        }
        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 50);
        }
        componentWillUnmount() {
            clearInterval(this.interval);
        }
        tick() {
            this.setState({ count: this.state.count + 1 });
        }
        render() {
            return React.createElement('text', { Text: new Date().toISOString() });
        }
    }

    class Stateful extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.state = { count: 500, color: { R: 1, G: 0, B: 0, A: 1 }, removed: [] };
        }

        OnTextChanged(value) {
            this.setState({ count: parseInt(value) || 0 });
        }

        onClicked() {
            this.setState({ color: { R: Math.random(), G: Math.random(), B: Math.random(), A: 1 } });
        }

        render() {
            return React.createElement(
                'div',
                null,
                React.createElement('uButton', {
                    BackgroundColor: this.state.color,
                    OnClicked: this.onClicked.bind(this) }),
                React.createElement('uEditableTextBox', {
                    Text: this.state.count,
                    OnTextChanged: value => this.OnTextChanged(value) }),
                React.createElement('text', { Text: 'item-count: ' + this.state.count }),
                React.createElement(
                    'uSizeBox',
                    { HeightOverride: 400 },
                    React.createElement(
                        'uScrollBox',
                        null,
                        _.times(this.state.count, i => React.createElement(ListItem, {
                            key: i,
                            data: i,
                            removed: this.state.removed.indexOf(i) >= 0,
                            remove: () => {
                                this.setState({ removed: [...this.state.removed, i] });
                            }
                        }))
                    )
                )
            );
        }
    }

    let component = ReactUMG.render(React.createElement(
        'uBorder',
        { Padding: { Left: 100, Top: 100, Right: 10, Bottom: 10 }, BrushColor: { R: 1, G: 1, B: 1, A: 0.2 } },
        React.createElement(
            'div',
            null,
            React.createElement('text', {
                ColorAndOpacity: { SpecifiedColor: { R: 0, G: 0, B: 1, A: 1 } },
                Text: 'HELLO React-UMG!' }),
            React.createElement(Timer, null),
            React.createElement(MyComponent, null),
            React.createElement(Stateful, null)
        )
    ), elem);

    return function () {
        ReactUMG.unmountComponent(component);
    };
}

async function demo(defer) {
    let elem = viewport_widget();
    defer(_ => elem.destroy());

    await npm('react-umg');
    let destroy = application(elem);
    defer(_ => destroy());
}

module.exports = demo;