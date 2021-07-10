import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Avatar, Button, Typography, Toolbar } from '@material-ui/core';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/memories');
        setUser(null);
    };


    useEffect(() => {
        const token = user?.token;
        //JWT
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);
    return (

        <div className='py-5'>
            <nav className='light-blue darken-4 rounded'>
                <div className="nav-wrapper">
                    <div className='row'>
                        <div className="col s12 l2">
                            <a href="/memories" className="brand-logo">Memories</a>
                        </div>
                        <div className="col s12 l10">
                            <div className="right hide-on-med-and-down">
                                <Toolbar className={classes.toolbar}>
                                    {user ? (
                                        <div className={classes.profile} >
                                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                                                {user.result.name.charAt(0)}
                                            </Avatar>
                                            <Typography className={classes.userName} variant="h6" > {user.result.name} </Typography>
                                            <Button variant="contained" className={classes.logout} onClick={logout} color="secondary"> Logout </Button>
                                        </div>
                                    ) : (<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                                    )}
                                </Toolbar>
                            </div>
                            <div className="right show-on-medium-and-down hide-on-med-and-up">
                                <Toolbar className={classes.toolbar}>
                                    {user ? (
                                        <div className='flex' >
                                            <div className='pr-3'>                                            
                                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                                                {user.result.name.charAt(0)}
                                            </Avatar>

                                            </div>
                                            <Button variant="contained" className={classes.logout} onClick={logout} color="secondary"> Logout </Button>
                                        </div>
                                    ) : (<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                                    )}
                                </Toolbar>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
