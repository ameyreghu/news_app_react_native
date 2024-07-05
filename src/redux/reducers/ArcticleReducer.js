import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
    loading:true,
    articles:[],
    error:null,
    selectedCountry:'in',
    selectedCategory:'general'
};

const ArticleReducer = (currentState = initialState, action) => {
  console.log('reducer');
  console.log(action);
  console.log(currentState.selectedCategory);
  console.log(currentState.selectedCountry);
    switch (action.type) {
        case ActionTypes.SET_ARTICLES:
      return { ...currentState, articles:action.payload };
        case ActionTypes.SET_LOADING:
      return { ...currentState, loading: action.payload };
        case ActionTypes.SET_ERROR:
      return { ...currentState, error: action.payload };
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