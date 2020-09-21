import React, { Component } from 'react'
import {
    Button,
    Typography,
    Box,
    Grid,
    TextField
} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { registerUser } from '../../../../src/store/actions/authActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import LockIcon from '@material-ui/icons/Lock';

class index extends Component {
    state = {
        name: "",
        companyName: "",
        phone: "",
        password: ""
    };
    handleChange = (e) => {
        this.setState({
            name: e.target.value,
            companyName: e.target.value,
            phone: e.target.value,
            password: e.target.value,

        });
    };

    onSubmit = e => {
        e.preventDefault();
        // // if (this.state.name === "") {
        //     this.setState(prevState => ({
        //         errors: {
        //             ...prevState.errors,
        //             name: true
        //         }
        //     }));
        // } else if (this.state.companyName === "") {
        //     this.setState(prevState => ({
        //         errors: {
        //             ...prevState.errors,
        //             companyName: true
        //         }
        //     }));
        // } else if (this.state.phone === "") {
        //     this.setState(prevState => ({
        //         errors: {
        //             ...prevState.errors,
        //             phone: true
        //         }
        //     }));

        // } else if (this.state.password.length < 5) {
        //     this.setState(prevState => ({
        //         errors: {
        //             ...prevState.errors,
        //             password: true
        //         }
        //     }));
        // }
        //  else {
        console.log(this.props.auth)

        const signUpData = {
            userId: this.props.auth.userId,
            name: this.state.name,
            companyName: this.state.companyName,
            phone: this.state.phone,
            password: this.state.password,
        };
        console.log("name", "companyName", "phone", "password", "user_email")
        this.props.registerUser(signUpData, this.props.history);
    };

    handleChange = e => {
        const { name } = e.target;
        this.setState({ [e.target.name]: e.target.value });
        this.setState(prevState => ({
            errors: {
                ...prevState.errors,
                [name]: false
            }
        }));
    };

    render() {
        return (

            <Grid container justify="center">
                <Box style={{ marginTop: "7rem" }} >
                    <Card style={{ padding: "19px 74px 72px 78px",marginTop:"-2rem" }}>
                        <Typography variant="h5" style={{
                            textAlign: "center",marginBottom:"2rem"
                        }}>
                            Create your Free Account
                           </Typography>

                             <Grid>
                            <TextField

                                style={{ width: "20rem",
                             }}
                                
                                label="Full Name"
                                id="standard-required"
                                margin="dense"
                                name='name'
                                onChange={this.handleChange}

                            />  
                          <PersonIcon 
                         color="disabled"
                          style={{marginLeft:"-2rem"
                          ,marginTop:"1rem"}}
                          />


                        </Grid>
                        <TextField
                            style={{ width: "20rem" }}
                            label="Contact Number"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='phone'


                        />
                        <PhoneIcon
                        color="disabled"
                        style={{marginLeft:"-2rem",
                         marginTop:"1rem"}}
                        />
                        <br />
                        <TextField
                            style={{ width: "20rem" }}
                            label="Company Name"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='companyName'
                        />
                        <BusinessIcon
                       color="disabled"
                       style={{marginLeft:"-2rem",
                       marginTop:"1rem"}}

                        />
                        <br />
                        <TextField
                            style={{ width: "20rem" }}
                            label="Password"
                            id="standard-required"
                            margin="dense"
                            onChange={this.handleChange}
                            name='password'
                        />
                        <LockIcon
                        color="disabled"
                       style={{marginLeft:"-2rem",
                       marginTop:"1rem"}}

                        />
                        <br />
                        <Button variant="contained"
                        color="primary"
                            style={{ 
                            backgroundColor:"#30364c",   
                            marginBottom: "-5rem", 
                            marginLeft: "0rem",
                            width:"20rem" }}
                            onClick={this.onSubmit}

                        >
                            Create an Account
                    </Button>
                    </Card>
                </Box>
            </Grid>


        )
    }
}
index.propTypes = {
    history: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,
    { registerUser })(withRouter(index));