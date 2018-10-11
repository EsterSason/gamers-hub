import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import './Register.css';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  // can handle multiple value changes
  handleChange = elementName => (event) => {
    this.setState({
      [elementName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      name, email, password, confirmPassword,
    } = this.state;
    return (
      <div className="centered">
        <Card>
          <CardContent>
            <Typography variant="display1" component="h2" align="center">
              Register
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="txt-name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
              />

              <TextField
                id="txt-email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                id="txt-password"
                label="Password"
                className={classes.textField}
                value={password}
                onChange={this.handleChange('password')}
                margin="normal"
                type="password"
              />
              <TextField
                id="txt-confirm-password"
                label="Repeat Password"
                className={classes.textField}
                value={confirmPassword}
                onChange={this.handleChange('confirmPassword')}
                margin="normal"
                type="password"
              />
            </form>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" style={{ margin: 'auto' }}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
