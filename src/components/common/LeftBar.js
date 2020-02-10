import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';

class LeftBar extends Component {
    render() {
        return (
            <List className="leftBar">
                <NavLink
                    activeStyle={{
                        color: "#FF9900"
                    }}
                    to={"/libros"} >
                    <ListItem button key={'libros'}>
                        <ListItemIcon><MenuBookIcon /></ListItemIcon>
                        <ListItemText primary={"Libros"} />
                    </ListItem>
                </NavLink >
                <Divider className="dividerColor" />
                <NavLink
                    activeStyle={{
                        color: "#FF9900"
                    }}
                    to={"/autores"} >
                    <ListItem button key={'autores'}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"Autores"} />
                    </ListItem>
                </NavLink >
                <Divider className="dividerColor" />
            </List>
        )
    }
}
export default withRouter(LeftBar)