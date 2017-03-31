const React = require('react')
const ReactUMG = require('react-umg')
const _ = require('lodash')

module.exports = function broserDesign(E) {
    const SmallFont = {FontObject:Root.GetEngine().SmallFont, Size:12};
    let editorStyle = new JavascriptStyleSet
    editorStyle.StyleSetName = 'EditorStyle'

    class BrowserDesign extends React.Component {
        constructor(props, context) {
            super(props, context);            
            this.items = [];
        }

        componentDidMount() {
            let elem = this.ListView.ueobj;
            E.on('collect', (objects) => {
                this.items = objects;
                elem.Items = _.clone(this.items);
                elem.RequestListRefresh()
            })
            elem.JavascriptContext = Context;
            elem.proxy = {
                OnSelectionChanged: item => {
                    E.emit('choose', item)
                }
            }
        }

        updateFilter(text) {
            let elem = this.ListView.ueobj;
            if (elem) {
                elem.Items = _.filter(this.items, item => text == '' || item.GetDisplayName().indexOf(text) >=0)
                elem.RequestListRefresh()
            }
        }

        render() {
            let listViewStyle = {
                ItemHeight: 20,
                'slot.size.size-rule' : 'Fill',
                SelectionMode:'Single',
                Columns: [
                    {
                        Id: 'Name',
                        Width: 1
                    }
                ],
                OnGenerateRowEvent: (item, column) => {
                    return ReactUMG.wrap(
                        <uSizeBox>
                            <uJavascriptTextBlock Font={SmallFont} Text= {item ? item.GetDisplayName() : column}/>
                        </uSizeBox>
                    )
                }
            }

            return (
                <div>
                    <uJavascriptSearchBox HintText={"..."} OnTextChanged= {this.updateFilter.bind(this)}/>
                    <uJavascriptListView ref={ref => this.ListView = ref} {...listViewStyle}/>
                </div>
            )
        }
    }

    let widget = ReactUMG.wrap(<BrowserDesign/>);
    global.widget = widget;
    return widget
}