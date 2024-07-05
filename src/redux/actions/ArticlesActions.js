import * as ActionTypes from './ActionTypes';

export const setArticles = (payload) => {
    return {
        type: ActionTypes.SET_ARTICLES,
        payload: payload
    }
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

export const setLoading = (payload) => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: payload
    }
}
export const setError= (payload) => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: payload
    }
}
