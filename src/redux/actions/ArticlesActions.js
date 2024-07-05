import getArticles from '../../axios/getArticles';
import * as ActionTypes from './ActionTypes';



export const getArticleAction = (params) => (dispatch) => {
    return new Promise( (resolve,reject) => {
        dispatch({
            type: ActionTypes.GET_ARTICLES,
        });

        getArticles(
            {
                country: params.selectedCountry,
                category: params.selectedCategory
            }
        ).then((result) => {
            if (result.sucess) {
                dispatch(
                    {
                        type: ActionTypes.GET_ARTICLES_SUCESS,
                        payload: result.data
                    }
                );
                resolve(result.data);
            } else {
                dispatch({
                    type: ActionTypes.GET_ARTICLES_ERROR,
                    payload: result.error
                });
                reject(result.error);
            }
        });
    });
}


export const setCategory = (payload) => {
    return {
        type: ActionTypes.SET_CATEGORY,
        payload: payload
    }
}

export const setCountry = (payload) => {
    return {
        type: ActionTypes.SET_COUNTRY,
        payload: payload
    }
}