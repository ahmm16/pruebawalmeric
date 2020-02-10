import actionTypes from '../actionTypes/book';
import update from 'immutability-helper';

const initialState = {
    books: [],
    bookId: false,
    bookDetails: [],
    loadingBooks: false,
    loadingBookDetails: false,
};

const stop = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS:
            return update(state, { books: { $set: action.payload.books } });
        case actionTypes.FETCH_BOOK_ID:
            return update(state, { bookId: { $set: action.payload.value } });
        case actionTypes.FETCH_BOOK_DETAILS:
            return update(state, { bookDetails: { $set: action.payload.book } });
        case actionTypes.LOADING_BOOKS:
            return update(state, { loadingBooks: { $set: action.payload.status } });
        case actionTypes.LOADING_BOOK_DETAILS:
            return update(state, { loadingBookDetails: { $set: action.payload.status } });
        default:
            return state;
    }
};

export default stop;