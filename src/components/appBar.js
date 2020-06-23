import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'


export default class ButtonAppBar extends React.Component {
    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" style={{ marginRight: 'theme.spacing(2)' }} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Movie App
                        </Typography>
                        <Link to='/' style={{textDecoration:'none',color:'white'}}><Button color="inherit">Home</Button></Link>
                        <Link to='/api/favourite/movies' style={{textDecoration:'none',color:'white'}}><Button color="inherit">Favourite</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
