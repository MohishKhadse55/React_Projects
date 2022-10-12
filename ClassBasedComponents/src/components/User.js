import classes from './User.module.css';
import {Component} from "react";

// Extending the component class gives the component properties to the class like this.props
class User extends Component{
  render(){
   return  <li className={classes.user}>{this.props.name}</li>;
  }
}
//
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
