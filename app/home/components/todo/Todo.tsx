import * as React from 'react';
import Task from '../task/Task';
import * as _ from 'lodash';

interface IProps {

}

interface IState {
    tasks: ITaskElement[];
}

export interface ITaskElement {
    taskId: string;
    taskName: string;
    isComplete: boolean;
    isEditMode: boolean;
}

export default class Todo extends React.Component<IProps, IState> {
    taskName: any;

    constructor(props) {
        super(props);
        this.editTask = this.editTask.bind(this);

        this.state = {
            tasks: []
        }
    }

    onClickAddTask() {
        if(this.taskName.value) {
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

    removeTask(taskId) {
        _.remove(this.state.tasks, (it) => it.taskId === taskId);

        this.setState({
            tasks: this.state.tasks
        })
    }

    changeComplete(taskId) {
        let elm: ITaskElement = _.find(this.state.tasks, (elm: ITaskElement) => elm.taskId == taskId);

        elm.isComplete = !elm.isComplete;

        this.setState({
            tasks: this.state.tasks
        });
    }

    editTask(taskId) {
        let elm: ITaskElement = _.find(this.state.tasks, (elm: ITaskElement) => elm.taskId == taskId);

        elm.isEditMode = !elm.isEditMode;

        this.setState({
            tasks: this.state.tasks
        });
    }

    render() {
        const items = this.renderTasks();

        return (
            <div className={'todo'}>
                {items}
                <input ref={(r) => this.taskName = r} type="text" placeholder={'Введите задачу'}/>
                    <button type="button" onClick={() => {this.onClickAddTask();
                    this.taskName.value = ''}}>Добавить</button>
            </div>
        )
    }

    renderTasks() {
        const items = _.map(this.state.tasks, (it) => {
            return (
                <Task params={it} editTask={this.editTask.bind(this)} removeTask={this.removeTask.bind(this)} changeComplete={this.changeComplete.bind(this)} key={it.taskId}/>
            )
        });

        return items;
    }
}

