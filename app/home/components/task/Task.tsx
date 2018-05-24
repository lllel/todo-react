import * as React from 'react';
import {ITaskElement} from "../todo/Todo";

interface IProps {
    params: ITaskElement;
    removeTask:(id)=>void;
    editTask: (id)=>void;
    changeComplete: (id)=>void;
}

interface IState {

}

export default class Task extends React.Component<IProps, IState> {

    newValue: any;

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
        const {isEditMode, taskName, isComplete} = this.props.params;

        return (
            <div className={"todo__task-container"}>
                <input className={'todo__checkbox'} type={"checkbox"} checked={isComplete} onChange={this.onChangeComplete.bind(this)}/>
                {isEditMode ? <input className={isComplete ? 'todo__task todo__task--complete' : 'todo__task'} onChange={() => {this.props.params.taskName = this.newValue.value}} ref={(r) => this.newValue = r} type={"text"} defaultValue={taskName}/> : <p className={isComplete ? 'todo__task todo__task--complete' : 'todo__task'}>{taskName}</p>}
                <input className={'todo__button'} type={"button"} value={!isEditMode ? "Редактировать" : "Сохранить"}
                       onClick={this.onSaveEditClick.bind(this)}/>
                <input className={'todo__button'} type={"button"} value="Удалить" onClick={this.onDeleteClick.bind(this)}/>
            </div>
        )
    }
}

