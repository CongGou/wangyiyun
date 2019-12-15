import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { createStore, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { Provider } from 'react-redux'
import Reducers  from './reducers'
const store = createStore(
    Reducers,
    applyMiddleware(thunk)
)
render()
function render() {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store} >
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
