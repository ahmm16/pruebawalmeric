import api from '../api/apiBook';
import actionTypes from '../actionTypes/book';

const actions = {
    getBooks: () => {
        return (dispatch) => {
            dispatch(actions.loadingBooks(true));
            api.getBooks().then(response => {
                if (response.length > 0) {
                    dispatch(actions.fetchBooks(response));
                } else {
                    dispatch(actions.fetchBooks(false));
                }
                dispatch(actions.loadingBooks(false));
            }, reason => {
                if (reason.message === 400) {
                    // !Books
                    console.log(reason.message)
                } else {
                    //TODO: Falló otra cosa
                    console.log(reason.message)
                }
                dispatch(actions.fetchBooks(false));
                dispatch(actions.loadingBooks(false));

            });
        }
    },
    fetchBooks: (books) => ({
        type: actionTypes.FETCH_BOOKS,
        payload: {
            books
        }
    }),
    loadingBooks: (status) => ({
        type: actionTypes.LOADING_BOOKS,
        payload: {
            status
        }
    }),
    fetchBookId: (bookId) => ({
        type: actionTypes.FETCH_BOOK_ID,
        payload: {
            bookId
        }
    }),
    getBookDetails: (bookId) => {
        return (dispatch) => {
            dispatch(actions.loadingBookDetails(true));
            (bookId !== false || bookId.isInteger()) && api.getBookDetails(bookId).then(response => {
                if (response.hasOwnProperty("ID")) {
                    dispatch(actions.fetchBookDetails(response));
                } else {
                    dispatch(actions.fetchBookDetails(false));
                }
                dispatch(actions.loadingBookDetails(false));
            }, reason => {
                if (reason.message === 400) {
                    // !Books
                    console.log(reason.message)
                } else {
                    //TODO: Falló otra cosa
                    console.log(reason.message)
                }
                dispatch(actions.fetchBookDetails(false));
                dispatch(actions.loadingBookDetails(false));
            });
        }
    },
    fetchBookDetails: (book) => ({
        type: actionTypes.FETCH_BOOK_DETAILS,
        payload: {
            book
        }
    }),
    loadingBookDetails: (status) => ({
        type: actionTypes.LOADING_BOOK_DETAILS,
        payload: {
            status
        }
    }),

};

export default actions;