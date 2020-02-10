import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import book from './book';
import author from './author';

export default (history) => combineReducers({
    router: connectRouter(history),
    book,
    author,
});
