import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { DataLayer } from './ContextRedux/DataLayer';
import reducer, { initialState } from './ContextRedux/Reducer';



ReactDOM.render(
    <DataLayer
     initialState={initialState}
      reducer={reducer} 
      >
        <App/>
 </DataLayer>
, document.getElementById('root'));

