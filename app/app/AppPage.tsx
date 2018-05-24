import * as React from 'react';
import {HomePage} from "../home/HomePage";

export default class AppPage extends React.Component<any,any> {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div id={'application'}>
                <HomePage/>
            </div>
        )
    }
}

