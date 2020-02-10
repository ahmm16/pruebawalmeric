import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import './assets/scss/index.scss';
import Routes from './Routes';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
	Header,
	Footer,
	LeftBar
} from './components/common'
const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Container maxWidth="xl">
					<Header />
					<Grid container className="backgroundGrey">
						<Router history={browserHistory}>
							<Grid item xs={12} sm={2}>
								<LeftBar />
							</Grid>
							<Grid item xs={12} sm={10} className="paddingContainer">
								<Routes />
							</Grid>
						</Router>
						<Footer />
					</Grid>
				</Container>
			</ThemeProvider>
		);
	}
}
export default App
