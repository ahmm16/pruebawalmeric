import api from '../api/apiAuthor';
import actionTypes from '../actionTypes/author';

const actions = {
    getAuthors: () => {
        return (dispatch) => {
            dispatch(actions.loadingAuthors(true));
            api.getAuthors().then(response => {
                if (response.length > 0) {
                    dispatch(actions.fetchAuthors(response));
                } else {
                    dispatch(actions.fetchAuthors(false));
                }
                dispatch(actions.loadingAuthors(false));
            }, reason => {
                if (reason.message === 400) {
                    // !Author
                    console.log(reason.message)
                } else {
                    //TODO: Falló otra cosa
                    console.log(reason.message)
                }
                dispatch(actions.fetchAuthors(false));
                dispatch(actions.loadingAuthors(false));
            });
        }
    },
    fetchAuthors: (authors) => ({
        type: actionTypes.FETCH_AUTHORS,
        payload: {
            authors
        }
    }),
    loadingAuthors: (status) => ({
        type: actionTypes.LOADING_AUTHORS,
        payload: {
            status
        }
    }),
    fetchAuthorId: (authorId) => ({
        type: actionTypes.FETCH_AUTHOR_ID,
        payload: {
            authorId
        }
    }),
    getAuthorDetails: (authorId) => {
        return (dispatch) => {
            dispatch(actions.loadingAuthorDetails(true));
            (authorId !== false || authorId.isInteger()) && api.getAuthorDetails(authorId).then(response => {
                if (response.hasOwnProperty("ID")) {
                    dispatch(actions.fetchAuthorDetails(response));
                } else {
                    dispatch(actions.fetchAuthorDetails(false));
                }
                dispatch(actions.loadingAuthorDetails(false));
            }, reason => {
                if (reason.message === 400) {
                    // !Authors
                    console.log(reason.message)
                } else {
                    //TODO: Falló otra cosa
                    console.log(reason.message)
                }
                dispatch(actions.loadingAuthorDetails(false));
                dispatch(actions.fetchAuthorDetails(false));
            });
        }
    },
    fetchAuthorDetails: (author) => ({
        type: actionTypes.FETCH_AUTHOR_DETAILS,
        payload: {
            author
        }
    }),
    loadingAuthorDetails: (status) => ({
        type: actionTypes.LOADING_AUTHOR_DETAILS,
        payload: {
            status
        }
    }),

};

export default actions;