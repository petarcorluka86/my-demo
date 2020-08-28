import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';
import App from '../containers/App';

export const store = createStore(rootReducer, compose(applyMiddleware(ReduxThunk)));

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