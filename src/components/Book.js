import React, { Component } from "react"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../imgs/book.png'
import { Loader } from "./common/"
import { Link } from "react-router-dom";

class Book extends Component {
    constructor(props) {
        super(props)
        this.dateFilter = this.dateFilter.bind(this)
    }

    dateFilter(date) {
        let dateFiltered = new Date(date).toLocaleDateString()
        return dateFiltered === 'Invalid Date' ? '--/--/----' : dateFiltered;
    }
    render() {
        const { data, loadingBookDetails, showButton } = this.props
        return (
            <React.Fragment>
                {
                    loadingBookDetails === true &&
                    <React.Fragment>
                        <Typography component="h2" variant="h4" color="secondary">Cargando detalle de libro</Typography>
                        <Loader status={loadingBookDetails} />
                    </React.Fragment>
                }
                {
                    !loadingBookDetails && data === '' &&
                    <Grid container spacing={2}>
                        <Typography component="h2" variant="h4" color="error">No se ha podido cargar el libro</Typography>
                    </Grid>
                }
                {
                    data !== '' &&
                    <Grid item xs={6} md={3}>
                        <Card className="card">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" color="primary" align="center">
                                    {data.Title}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                image={data.Title && img}
                                title="book"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {this.dateFilter(data.PublishDate)}
                                </Typography>
                            </CardContent>
                            {showButton &&
                                <CardActions>
                                    <Button size="large" color="secondary" variant="outlined" className="buttonCard">
                                        <Link to={"/libro/" + data.ID} className="linkCard">Ver detalles</Link>
                                    </Button>
                                </CardActions>
                            }
                        </Card>
                    </Grid>
                }
            </React.Fragment>
        )

    }
}
export default Book
