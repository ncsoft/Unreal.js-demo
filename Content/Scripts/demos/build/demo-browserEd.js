var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const React = require('react');
const ReactUMG = require('react-umg');
const _ = require('lodash');

module.exports = function broserDesign(E) {
    const SmallFont = { FontObject: Root.GetEngine().SmallFont, Size: 12 };
    let editorStyle = new JavascriptStyleSet();
    editorStyle.StyleSetName = 'EditorStyle';

    class BrowserDesign extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.items = [];
        }

        componentDidMount() {
            let elem = this.ListView.ueobj;
            E.on('collect', objects => {
                this.items = objects;
                elem.Items = _.clone(this.items);
                elem.RequestListRefresh();
            });
            elem.JavascriptContext = Context;
            elem.proxy = {
                OnSelectionChanged: item => {
                    E.emit('choose', item);
                }
            };
        }

        updateFilter(text) {
            let elem = this.ListView.ueobj;
            if (elem) {
                elem.Items = _.filter(this.items, item => text == '' || item.GetDisplayName().indexOf(text) >= 0);
                elem.RequestListRefresh();
            }
        }

        render() {
            let listViewStyle = {
                ItemHeight: 20,
                'slot.size.size-rule': 'Fill',
                SelectionMode: 'Single',
                Columns: [{
                    Id: 'Name',
                    Width: 1
                }],
                OnGenerateRowEvent: (item, column) => {
                    return ReactUMG.wrap(React.createElement(
                        'uSizeBox',
                        null,
                        React.createElement('uJavascriptTextBlock', { Font: SmallFont, Text: item ? item.GetDisplayName() : column })
                    ));
                }
            };

            return React.createElement(
                'div',
                null,
                React.createElement('uJavascriptSearchBox', { HintText: "...", OnTextChanged: this.updateFilter.bind(this) }),
                React.createElement('uJavascriptListView', _extends({ ref: ref => this.ListView = ref }, listViewStyle))
            );
        }
    }

    let widget = ReactUMG.wrap(React.createElement(BrowserDesign, null));
    global.widget = widget;
    return widget;
};