import {createStore,combineReducers} from 'redux';
import ArticleReducer from './reducers/ArcticleReducer';

const rootReducer =combineReducers({
    articles:ArticleReducer
});

const store=createStore(rootReducer);

export default store;