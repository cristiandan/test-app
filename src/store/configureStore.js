import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducer';
import initialState from '../reducers/initialState'

const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    );
};

export default configureStore;
