import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import authorActions from "../actionCreators/author"
import { Author } from '../components/'
import Typography from '@material-ui/core/Typography';

class PageAuthorDetails extends Component {
    componentDidMount() {
        let url = window.location.pathname;
        //TODO: IMPROVE into a function /helpers
        let authorId = url.substring(7);
        this.props.getAuthorDetails(authorId)
    }

    render() {
        const { authorDetails, loadingAuthorDetails } = this.props
        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" color="primary">
                    Detalles de libro
                </Typography>
                {authorDetails !== '' && <Author data={authorDetails} loadingAuthorDetails={loadingAuthorDetails} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    authorDetails: state.author.authorDetails,
    loadingAuthorDetails: state.author.loadingAuthorDetails,
})

const mapDispatchToProps = {
    getAuthorDetails: authorActions.getAuthorDetails
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PageAuthorDetails)
)
