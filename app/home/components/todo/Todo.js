"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Task_1 = require("../task/Task");
const _ = require("lodash");
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.state = {
            tasks: []
        };
    }
    onClickAddTask() {
        if (this.taskName.value) {
            let taskName = this.taskName.value;
            this.state.tasks.push({
                taskId: (Math.random() * 999).toString(),
                taskName: taskName,
                isEditMode: false,
                isComplete: false
            });
            this.setState({
                tasks: this.state.tasks
            });
        }
    }
    addTask(task) {
        this.state.tasks.push(task);
        this.setState({
            tasks: this.state.tasks
        });
    }
    removeTask(taskId) {
        _.remove(this.state.tasks, (it) => it.taskId === taskId);
        this.setState({
            tasks: this.state.tasks
        });
    }
    changeComplete(taskId) {
        let elm = _.find(this.state.tasks, (elm) => elm.taskId == taskId);
        elm.isComplete = !elm.isComplete;
        this.setState({
            tasks: this.state.tasks
        });
    }
    editTask(taskId) {
        let elm = _.find(this.state.tasks, (elm) => elm.taskId == taskId);
        elm.isEditMode = !elm.isEditMode;
        this.setState({
            tasks: this.state.tasks
        });
    }
    render() {
        const items = this.renderTasks();
        return (React.createElement("div", { className: 'todo' },
            items,
            React.createElement("input", { ref: (r) => this.taskName = r, type: "text", placeholder: 'Введите задачу' }),
            React.createElement("button", { type: "button", onClick: () => {
                    this.onClickAddTask();
                    this.taskName.value = '';
                } }, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")));
    }
    renderTasks() {
        const items = _.map(this.state.tasks, (it) => {
            return (React.createElement(Task_1.default, { params: it, editTask: this.editTask.bind(this), removeTask: this.removeTask.bind(this), changeComplete: this.changeComplete.bind(this), key: it.taskId }));
        });
        return items;
    }
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map