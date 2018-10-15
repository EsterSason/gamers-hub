import React from 'react';
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
function AccountDetailsForm(props) {
  const {
    username, email, classes, handleChange,
  } = props;

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <TextField
          id="txt-username"
          label="Username"
          className={classes.textField}
          value={username}
          onChange={handleChange('username')}
          margin="normal"
          required
        />

        <TextField
          id="txt-email"
          label="Email"
          className={classes.textField}
          value={email}
          onChange={handleChange('email')}
          margin="normal"
          required
        />
        <TextField
          id="txt-password"
          label="Password"
          className={classes.textField}
          onChange={handleChange('password')}
          margin="normal"
          type="password"
          required
        />
        <TextField
          id="txt-confirm-password"
          label="Repeat Password"
          className={classes.textField}
          onChange={handleChange('confirmPassword')}
          margin="normal"
          type="password"
          required
        />
      </form>
    </div>
  );
}

AccountDetailsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default withStyles(styles)(AccountDetailsForm);
