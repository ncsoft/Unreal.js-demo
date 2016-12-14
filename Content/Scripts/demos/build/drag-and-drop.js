/// <reference path="../../typings/ue.d.ts">/>

const uclass = require('uclass')().bind(this, global);

const React = require('react');
const ReactUMG = require('react-umg');

let mygeom;
let sprite;
class DragOp extends DragDropOperation {
    Dragged(event) {
        let pos = UPointerEvent.C(event).GetScreenSpacePosition();
        pos = Geometry.C(mygeom).AbsoluteToLocal(pos);
        sprite.Slot.SetPosition(pos);
    }
    Drop(event) {
        sprite.SetVisibility('Hidden');
        console.log('ok');
    }
    DragCancelled(event) {
        sprite.SetVisibility('Hidden');
        console.log('cancel');
    }
}
class MyDraggable extends JavascriptWidget {
    AddChild(x) {
        this.SetRootWidget(x);
        return {};
    }
    RemoveChild(x) {
        this.SetRootWidget(null);
    }
    OnDragDetected() {
        let op = WidgetBlueprintLibrary.CreateDragDropOperation(DragOp_C);
        sprite.SetVisibility('Visible');
        return {
            $: EventReply.Handled(),
            Operation: op
        };
    }
    OnMouseButtonDown(geom, event) {
        mygeom = geom;
        return event.DetectDragIfPressed(this, { KeyName: 'LeftMouseButton' });
    }
}
class MyDropTarget extends JavascriptWidget {
    AddChild(x) {
        this.SetRootWidget(x);
        return {};
    }
    RemoveChild(x) {
        this.SetRootWidget(null);
    }
    OnDrop(x) {
        console.log('dropped', x);
        return EventReply.Handled();
    }
}
let DragOp_C = uclass(DragOp);
let MyDraggable_C = uclass(MyDraggable);
let MyDropTarget_C = uclass(MyDropTarget);
ReactUMG.Register('uDraggable', MyDraggable_C);
ReactUMG.Register('uDropTarget', MyDropTarget_C);

class DragAndDrop extends React.Component {
    componentDidMount() {
        sprite = this.refs.sprite.ueobj;
        global.x = this.refs.panel.ueobj;
    }

    render() {
        return React.createElement(
            'uOverlay',
            { Slot: { VerticalAlignment: 'VAlign_Fill', Size: { Rule: 'Fill' } } },
            React.createElement(
                'div',
                { Slot: { HorizontalAlignment: 'HAlign_Fill' } },
                React.createElement(
                    'uDraggable',
                    null,
                    React.createElement('text', { Text: 'Draggable' })
                ),
                React.createElement(
                    'uDropTarget',
                    null,
                    React.createElement('text', { Text: 'Drop target' })
                )
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
                        BrushColor: { R: 1, A: 0.5 }
                    },
                    React.createElement(
                        'uSizeBox',
                        { ref: 'sprite', HeightOverride: 64 },
                        React.createElement('text', { Text: 'D' })
                    )
                )
            )
        );
    }
}

module.exports = DragAndDrop;