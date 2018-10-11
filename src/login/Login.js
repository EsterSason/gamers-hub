import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// `import DialogContentText from '@material-ui/core/DialogContentText';`
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import { AccountCircle, Lock } from '@material-ui/icons';

// import './Login.css';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showPassword: false,
      email: '',
      password: '',
    };
  }

  // can handle multiple value changes
  handleChange = elementName => (event) => {
    this.setState({
      [elementName]: event.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    const {
      showPassword, open, email, password,
    } = this.state;
    return (
      <div className="centered">
        <Button onClick={this.handleClickOpen}>Login</Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>Please Login</DialogContentText> */}
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="txt-email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                fullWidth
                autoFocus
                margin="normal"
              />
              <FormControl className={classes.textField}>
                <InputLabel htmlFor="txt-password">Password</InputLabel>
                <Input
                  id="txt-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={this.handleChange('password')}
                  fullWidth
                  endAdornment={(
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
)}
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
            <Button onClick={this.handleClose} color="default">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

//   {/*
//   InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         <AccountCircle />
//       </InputAdornment>
//     ),
//   }}
// */}

// startAdornment={(
//   <InputAdornment position="start">
//     <Lock />
//   </InputAdornment>
// )}
