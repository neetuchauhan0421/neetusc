import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from '../../../store/actions/authActions';
//import {useStyles} from "@material-ui/core/styles";
//import Alert from '@material-ui/lab/Alert';
import {TextField, Button, Grid, Paper, InputLabel} from '@material-ui/core';
export default () => {
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        const signInData = {
            email: "",
            password:password
        }
        dispatch(loginUser(signInData));
    }
    //const classes = useStyles();
    return(
        <div > 
        <Paper elevation={2} 
        style={{width:"20rem",marginTop:"11rem",marginLeft:"29rem"}}
        
        >
            <Grid 
                container 
                spacing={2} 
                direction="column" 
            >
                <Grid container direction="column">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        width={1}
                        onClick={handleLogin}
                        //className={classes.button}
                    >Login</Button>
                </Grid>

            </Grid>
        </Paper>
    </div>
    )

}