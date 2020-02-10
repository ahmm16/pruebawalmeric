import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import bookActions from "../actionCreators/book"
import { ListBooks } from '../components/'
import Typography from '@material-ui/core/Typography';

class PageBooks extends Component {
    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        const { books, loadingBooks } = this.props
        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" color="primary">
                    Libros
                </Typography>
                <ListBooks data={books} loadingBooks={loadingBooks}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    books: state.book.books,
    loadingBooks: state.book.loadingBooks,
})

const mapDispatchToProps = {
    getBooks: bookActions.getBooks
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PageBooks)
)
