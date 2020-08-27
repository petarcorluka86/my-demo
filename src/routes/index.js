import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from "redux";
import {rootReducer} from '../reducers';
import ContextProvider from './Context';
import App from '../components/App'

export const store = createStore(rootReducer);

export default function Routes() {
    return (
        <ContextProvider>
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={App} />
                </Switch>
            </BrowserRouter>
        </ContextProvider>
    )

}