import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import {rootReducer} from '../reducers';
import App from '../containers/App';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function Routes() {
    return(
        <Provider store={store}>
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={App} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}