import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {SortingTable} from "./components/SortingTable";

ReactDOM.render(
  <React.StrictMode>
    <SortingTable />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
