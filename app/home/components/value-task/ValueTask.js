"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ValueTask extends React.Component {
    constructor(props) {
        super(props);
    }
    sendValue(id, value) {
        this.props.val(id, value);
    }
    render() {
        if (this.props.isEdit) {
            return (React.createElement(React.Fragment, null,
                React.createElement("textarea", { className: this.props.class ? 'todo__task todo__task--complete' : 'todo__task', autoFocus: true, onChange: (evt) => { this.sendValue(this.props.idItem, evt.target.value); } }, this.props.children)));
        }
        if (!this.props.isEdit) {
            return (React.createElement(React.Fragment, null,
                React.createElement("p", { className: this.props.class ? 'todo__task todo__task--complete' : 'todo__task' }, this.props.children)));
        }
    }
}
exports.default = ValueTask;
//# sourceMappingURL=ValueTask.js.map