import * as React from 'react';
import Todo from './components/todo/Todo';
import {type} from "os";

interface IProps {

}

interface IState {

}

export class HomePage extends React.Component<IProps, IState> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Todo/>
            </div>
        )
    }
}
