const ReactUMG = require('react-umg');
const React = require('react');

module.exports = function PropsDesign(E) {
    const SmallFont = { FontObject: Root.GetEngine().SmallFont, Size: 12 };

    class PropsEditor extends React.Component {
        componentDidMount() {
            let propsEd = this.PropsEd.ueobj;
            E.on('choose', object => {
                propsEd.SetObject(object);
            });
        }

        onChange(t) {
            E.emit('updateData');
        }

        render() {
            return React.createElement(
                'div',
                null,
                React.createElement('uPropertyEditor', { ref: ref => this.PropsEd = ref,
                    OnChange: t => this.onChange(t),
                    Slot: { Size: { SizeRule: ESlateSizeRule.Fill } } })
            );
        }
    }

    return ReactUMG.wrap(React.createElement(PropsEditor, null));
};