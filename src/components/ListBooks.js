import React, { Component } from "react"
import Book from './Book'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Loader } from "./common/"

class ListBooks extends Component {
    render() {
        const { data, loadingBooks } = this.props
        return (
            <React.Fragment>
                {
                    loadingBooks === true &&
                    <React.Fragment>
                        <Typography component="h2" variant="h4" color="secondary">Cargando libros</Typography>
                        <Loader status={loadingBooks} />
                    </React.Fragment>
                }
                {
                    !loadingBooks && !data.length > 0 &&
                    <Typography component="h2" variant="h4" color="error">Ha habido un error al cargar el listado de libros</Typography>
                }
                {/*TODO: improve this conditional to not allow render the Grid*/}
                {data && data.length > 0 &&
                    <Grid container spacing={2}>
                        {
                            data.map(book =>
                                <Book data={book} key={book.ID} showButton={true} />
                            )
                        }
                    </Grid>
                }
            </React.Fragment>
        )
    }
}

export default ListBooks
