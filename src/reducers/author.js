import actionTypes from '../actionTypes/author';
import update from 'immutability-helper';

const initialState = {
    authors: [],
    authorId: false,
    authorDetails: [],
    loadingAuthors: false,
    loadingAuthorDetails: false,
};

const stop = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUTHORS:
            return update(state, { authors: { $set: action.payload.authors } });
        case actionTypes.FETCH_AUTHOR_ID:
            return update(state, { authorId: { $set: action.payload.value } });
        case actionTypes.FETCH_AUTHOR_DETAILS:
            return update(state, { authorDetails: { $set: action.payload.author } });
        case actionTypes.LOADING_AUTHORS:
            return update(state, { loadingAuthors: { $set: action.payload.status } });
        case actionTypes.LOADING_AUTHOR_DETAILS:
            return update(state, { loadingAuthorDetails: { $set: action.payload.status } });
        default:
            return state;
    }
};

export default stop;