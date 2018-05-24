"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    onChangeComplete() {
        this.props.changeComplete(this.props.params.taskId);
    }
    onSaveEditClick() {
        this.props.editTask(this.props.params.taskId);
    }
    onDeleteClick() {
        this.props.removeTask(this.props.params.taskId);
    }
    render() {
        const { isEditMode, taskName, isComplete } = this.props.params;
        return (React.createElement("div", { className: "todo__task-container" },
            React.createElement("input", { className: 'todo__checkbox', type: "checkbox", checked: isComplete, onChange: this.onChangeComplete.bind(this) }),
            isEditMode ? React.createElement("input", { className: isComplete ? 'todo__task todo__task--complete' : 'todo__task', onChange: () => { this.props.params.taskName = this.newValue.value; }, ref: (r) => this.newValue = r, type: "text", defaultValue: taskName }) : React.createElement("p", { className: isComplete ? 'todo__task todo__task--complete' : 'todo__task' }, taskName),
            React.createElement("input", { className: 'todo__button', type: "button", value: !isEditMode ? "Редактируем" : "Сохранить", onClick: this.onSaveEditClick.bind(this) }),
            React.createElement("input", { className: 'todo__button', type: "button", value: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", onClick: this.onDeleteClick.bind(this) })));
    }
}
exports.default = Task;
//# sourceMappingURL=Task.js.map