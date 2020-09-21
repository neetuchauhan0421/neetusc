
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import LoginComp from "./logincall";
import EmailIcon from '@material-ui/icons/Email';
import { userEmail } from '../../../store/actions/authActions';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";




const styles = theme => ({
  email: {
    background: '#48a026',
    color: 'white',
  },
  gmail: {
    background: '#4385f5',
  },

});




class Home extends Component {
  state = {
    email: ""

  }

  // componentDidMount() {
  //   this.onclickemail();
  // }

  onclickemail = () => {
    this.props.userEmail(this.state.email, this.props.history);
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(e.target.value)
  };

  render() {
    const {
      email,

    } = this.state;
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={5}
        style={{ marginLeft: "23rem", marginTop: "5rem" }}>
        <Card style={{ boxShadow: 'none' }}>
          <CardContent>
            <CssBaseline />

            <Typography
              variant='h4'
              style={{
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              Get your free account
            </Typography>


            <Grid container justify='center'>
              <LoginComp />

            </Grid>
            <Divider style={{ marginTop: "2.5rem" }} />
            {/* <form onSubmit={this.handleSubmit}> */}

            <Grid container justify='center'>
              <Grid item xs={12} sm={10} md={9}>
                <TextField
                 type="email"
                 pattern=".+@gmail.com"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  size='small'
                  name='email'
                  label='Work email address'
                  value={email}

                  id='email'
                  style={{ marginBottom: '1rem' }}
                  autoComplete='email'
                  onChange={this.handleChange}
                  required
                />
              
              </Grid>
            </Grid>
            <Grid container justify='center'>
              <Grid container justify='center'>
                <Grid

                  style={{ textAlign: 'center', marginTop: '2rem' }}
                >
                  <Button
                    className={classes.email}
                    style={{ backgroundColor: '#48a026' }}
                    variant="contained"
                    type="submit  "
                    style={{ width: "23rem" }}
                    onClick={this.onclickemail}
                  >
                    <EmailIcon style={{ marginLeft: "-9rem" }} />
                    Continue with Email
        </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* </form> */}
          </CardContent>
        </Card>

      </Grid>

    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({});

// export default withStyles(styles){userEmail}(index);
export default withStyles(styles)(connect(mapStateToProps,
  { userEmail })(withRouter(Home))
);

