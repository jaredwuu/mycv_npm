import React from 'react';

import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';



const store = createStore(reducers, compose(applyMiddleware(thunk)))

const MemoriesApp = () => {

    return (
        <div className='container h-screen border-2'>
            <Provider store={store}>
                <BrowserRouter>
                    <Container maxidth="lg">
                        <Navbar />
                        <Switch>
                            <Route path='/memories' exact component={Home} />
                            <Route path="/auth" component={Auth} />
                        </Switch>
                    </Container>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default MemoriesApp;