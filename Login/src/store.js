import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'react-redux'
import rootReducer from './Redux/Reducers'

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;