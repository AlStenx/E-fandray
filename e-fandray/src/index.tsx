import * as React from "react";
import {render} from "react-dom";
import App from "./App";


render(<App />, document.getElementById("root"));

/*import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  languageName: 'TypeScript',
  enthusiasmLevel: 1,
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);*/