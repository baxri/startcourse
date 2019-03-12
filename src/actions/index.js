import * as actionTypes from './types';

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        payload: token,
    }
}