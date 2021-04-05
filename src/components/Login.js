import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validateUser } from '../redux/actions/user';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function Login() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.mentors);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);

    const [username, setUser] = React.useState('');
    const [password, setPass] = React.useState('');

    function loginUser() {
        dispatch(validateUser(username, password));
    };

    return (
        <Grid container spacing={4}>
            <Grid item sm={4}></Grid>
            <Grid item sm={4} container spacing={2}>
                <Grid item sm={12} style={{ marginTop: '10px' }}>
                    <h1>Expertrons Admin Portal</h1>
                </Grid>
                <Grid item sm={12} >
                    <TextField
                        id="username"
                        label="Username"
                        onChange={(e) => setUser(e.target.value)}
                        variant="outlined"
                        style={{ width: '100%' }} />
                </Grid>
                <Grid item sm={12} >
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        variant="outlined"
                        style={{ width: '100%' }} />
                </Grid>
                <Grid item sm={12} >
                    <Button
                        onClick={loginUser}
                        variant="contained"
                        color="primary"
                        style={{ width: '100%' }}>
                        Login
                    </Button>
                </Grid>
            </Grid>
            <Grid item sm={4}></Grid>
        </Grid>
    )
}

export default Login;