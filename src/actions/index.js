import * as actionTypes from './types';

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        payload: token,
    }
}

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user,
    }
}