import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
  loading: true,
  articles: [],
  error: null,
  selectedCountry: 'in',
  selectedCategory: 'general'
};

const ArticleReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ARTICLES:
      return { ...currentState, loading: true };
    case ActionTypes.GET_ARTICLES_SUCESS:
      return { ...currentState, articles: action.payload, loading: false };
    case ActionTypes.GET_ARTICLES_ERROR:
      return { ...currentState, error: action.payload, loading: false };
    case ActionTypes.SET_COUNTRY:
      return { ...currentState, selectedCountry: action.payload };
    case ActionTypes.SET_CATEGORY:
      return { ...currentState, selectedCategory: action.payload };
    default:
      // console.warn(`Unknown action type: ${action.type}`);
      return currentState;
  }
}

export default ArticleReducer;