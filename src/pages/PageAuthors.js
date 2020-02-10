import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import authorActions from "../actionCreators/author"
import { ListAuthors } from '../components/'
import Typography from '@material-ui/core/Typography';

class PageAuthors extends Component {
    componentDidMount() {
        this.props.getAuthors()
    }
    render() {
        const { authors, loadingAuthors } = this.props
        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" color="primary">
                    Listado de Autores
                </Typography>
                <ListAuthors data={authors} loadingAuthors={loadingAuthors}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    authors: state.author.authors,
    loadingAuthors: state.author.loadingAuthors,
})

const mapDispatchToProps = {
    getAuthors: authorActions.getAuthors
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PageAuthors)
)
