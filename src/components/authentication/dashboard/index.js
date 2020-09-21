import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";



class dashboard extends Component {

  // classes = useStyles();
  // bull = <span className={classes.bullet}>•</span>;
  render(){
  return (
    <Card style={{width:"19rem",marginLeft:"28rem"}}>
      <CardContent>
      
        <Typography variant="h5" component="h2">
          DASHBOARD
        </Typography>
        
        <Typography variant="h5" component="h2">
          {this.props.auth.userId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
  }
}
// index.propTypes = {
//   history: PropTypes.object.isRequired,
//   registerUser: PropTypes.func.isRequired,

// };
const mapStateToProps = state => ({
  auth: state.auth
});


//   export default (index)(registerUser);
export default connect(mapStateToProps)(withRouter(dashboard));