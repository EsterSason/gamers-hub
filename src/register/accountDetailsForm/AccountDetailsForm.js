import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
};

class AccountDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      username, email, classes, handleChange,
    } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="txt-username"
            label="Username"
            className={classes.textField}
            value={username}
            onChange={handleChange('username')}
            margin="normal"
          />

          <TextField
            id="txt-email"
            label="Email"
            className={classes.textField}
            value={email}
            onChange={handleChange('email')}
            margin="normal"
          />
          <TextField
            id="txt-password"
            label="Password"
            className={classes.textField}
            value={password}
            onChange={handleChange('password')}
            margin="normal"
            type="password"
          />
          <TextField
            id="txt-confirm-password"
            label="Repeat Password"
            className={classes.textField}
            value={confirmPassword}
            onChange={handleChange('confirmPassword')}
            margin="normal"
            type="password"
          />
        </form>
      </div>
    );
  }
}

AccountDetailsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default withStyles(styles)(AccountDetailsForm);
