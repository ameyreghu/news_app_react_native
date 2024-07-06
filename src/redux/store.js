import {createStore,combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import ArticleReducer from './reducers/ArcticleReducer';

const rootReducer =combineReducers({
    articles:ArticleReducer
});

const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;