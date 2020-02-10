import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" justify="space-between">
                        <img alt="walmeric" src="https://walmeric.com/wp-content/uploads/2018/02/Logo-Walmeric_white.svg" />
                        <Typography variant="h6" noWrap>
                            Prueba Walmeric
                                </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;