import * as React from 'react';
import * as ReactDom from 'react-dom';
import '../app/app/css/index.css';
import AppPage from "./app/AppPage";

ReactDom.render(<AppPage />, document.querySelector('.root'));
