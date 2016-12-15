/// <reference path="../../typings/ue.d.ts">/>

const uclass = require('uclass')().bind(this, global);

const React = require('react');
const ReactUMG = require('react-umg');
const events = require('events');

let context = {
    mygeom: null,
    sprite: null
};

class DragOp extends DragDropOperation {
    Dragged(event) {
        let pos = UPointerEvent.C(event).GetScreenSpacePosition();
        pos = Geometry.C(context.mygeom).AbsoluteToLocal(pos);
        context.sprite.Slot.SetPosition(pos);
        context.E.emit('dragged', event);
    }
    Drop(event) {
        context.sprite.SetVisibility('Hidden');
        context.E.emit('drop', event);
    }
    DragCancelled(event) {
        context.sprite.SetVisibility('Hidden');
        context.E.emit('cancel', event);
    }
}
class MyDraggable extends JavascriptWidget {
    properties() {
        this.DragId /*int*/;
    }
    OnDragDetected() {
        let op = WidgetBlueprintLibrary.CreateDragDropOperation(DragOp_C);
        context.sprite.SetVisibility('Visible');
        context.E.emit('detected', this.DragId);
        return {
            $: EventReply.Handled(),
            Operation: op
        };
    }
    OnMouseButtonDown(geom, event) {
        context.mygeom = geom;
        return event.DetectDragIfPressed(this, { KeyName: 'LeftMouseButton' });
    }
}
class MyDropTarget extends JavascriptWidget {
    properties() {
        this.DragId /*int*/;
    }
    OnDrop(x) {
        context.E.emit('dropped', this.DragId, x);
        return EventReply.Handled();
    }
    OnDragEnter(geom, event) {
        context.E.emit('enter', this.DragId, geom, event);
    }
    OnDragLeave(event) {
        context.E.emit('leave', this.DragId, event);
    }
}
let DragOp_C = uclass(DragOp);
let MyDraggable_C = uclass(MyDraggable);
let MyDropTarget_C = uclass(MyDropTarget);
ReactUMG.Register('uDraggable', MyDraggable_C);
ReactUMG.Register('uDropTarget', MyDropTarget_C);

class DragAndDrop extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            dragging: null,
            count: [0, 0, 0]
        };
    }

    componentDidMount() {
        context.sprite = this.refs.sprite.ueobj;
        let E = context.E = new events.EventEmitter();
        E.on('drop', () => {
            this.setState({ dragging: null, focus: null });
        });
        E.on('cancel', () => {
            this.setState({ dragging: null, focus: null });
        });
        E.on('dropped', x => {
            let c = this.state.count;
            c[x] = c[x] + 1;
            this.setState({ count: c });
        });
        E.on('detected', x => {
            this.setState({ dragging: x });
        });
        E.on('enter', x => {
            this.setState({ focus: x });
        });
        E.on('leave', x => {
            if (this.state.focus == x) {
                this.setState({ focus: null });
            }
        });
    }

    componentWillUnmount() {
        context.sprite = null;
        context.E = null;
    }

    render() {
        return React.createElement(
            'uOverlay',
            { Slot: { VerticalAlignment: 'VAlign_Fill', Size: { Rule: 'Fill' } } },
            React.createElement(
                'div',
                { Slot: { HorizontalAlignment: 'HAlign_Fill' } },
                [100, 200].map(id => React.createElement(
                    'uDraggable',
                    { key: id, DragId: id },
                    React.createElement('text', { Text: `Item ${ id }` })
                )),
                [1, 2].map(id => React.createElement(
                    'uDropTarget',
                    { key: id, DragId: id },
                    React.createElement(
                        'uBorder',
                        { BrushColor: { R: 1, A: this.state.focus == id ? 0.5 : 0 } },
                        React.createElement('text', { Text: this.state.dragging ? "Drop HERE!" : `Drop target #${ id } ${ this.state.count[id] }` })
                    )
                ))
            ),
            React.createElement(
                'uCanvasPanel',
                {
                    Visibility: 'HitTestInvisible',
                    ref: 'panel',
                    Slot: {
                        HorizontalAlignment: 'HAlign_Fill',
                        VerticalAlignment: 'VAlign_Fill'
                    } },
                React.createElement(
                    'uBorder',
                    {
                        ref: 'sprite',
                        Visibility: 'Hidden',
                        BrushColor: { R: 1, A: 0.5 },
                        Slot: { Size: { X: 128, Y: 128 } }
                    },
                    React.createElement('text', { Text: `D ${ this.state.dragging }` })
                )
            )
        );
    }
}

module.exports = DragAndDrop;