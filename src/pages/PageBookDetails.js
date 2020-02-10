import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import bookActions from "../actionCreators/book"
import { Book } from '../components/'
import Typography from '@material-ui/core/Typography';

class PageBookDetails extends Component {
    componentDidMount() {
        let url = window.location.pathname;
        //TODO: IMPROVE
        let bookId = url.substring(7);
        this.props.getBookDetails(bookId)
    }

    render() {
        const { bookDetails, loadingBookDetails } = this.props
        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" color="primary">
                    Detalles de libro
                </Typography>
                {bookDetails !== '' && <Book data={bookDetails} loadingBookDetails={loadingBookDetails} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    bookDetails: state.book.bookDetails,
    loadingBookDetails: state.book.loadingBookDetails,
})

const mapDispatchToProps = {
    getBookDetails: bookActions.getBookDetails
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PageBookDetails)
)
