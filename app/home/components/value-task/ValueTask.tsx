import * as React from 'react';

interface IProps {
    isEdit: boolean,
    class: string,
    val: any,
    idItem: any
}

interface IState {
    isEditing: boolean
}

export default class ValueTask extends React.Component<IProps, IState> {
    constructor(props){
        super(props);
    }

    sendValue(id, value) {
       this.props.val(id, value);
    }

    render() {
       if(this.props.isEdit) {
           return (
               <>
                   <textarea className={this.props.class ? 'todo__task todo__task--complete' : 'todo__task'}
                             autoFocus
                             onChange={(evt) => {this.sendValue(this.props.idItem, evt.target.value)}}>{this.props.children}</textarea>
               </>
           )
       }

        if(!this.props.isEdit) {
            return (
                <>
                    <p className={this.props.class ? 'todo__task todo__task--complete' : 'todo__task'}>{this.props.children}</p>
                </>
            )
        }
    }
}

