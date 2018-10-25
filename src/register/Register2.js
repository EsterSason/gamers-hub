import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import AccountDetailsForm from './accountDetailsForm/AccountDetailsForm';
import GamingPrefsForm from './gamingPrefsForm/GamingPrefsForm';
import './Register.css';
import FormFieldsGenerator from '../utils/formFieldsGenerator/formFieldsGenerator';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Username',
        config: {
          name: 'username_input',
          text: 'text',
          placeholder: 'Enter your username',
        },
        validation: {
          valid: true,
        },
      },
      activeStep: 0,
    };
  }

  getSteps = () => ['Account details', 'Gaming preferences', 'Optional details'];

  getStepContent(step) {
    const {
      username, usernameValid, email, emailValid,
    } = this.state;
    switch (step) {
      case 0:
        return (
          <AccountDetailsForm
            handleChange={this.handleChange}
            username={username}
            email={email}
            emailValid={emailValid}
            usernameValid={usernameValid}
          />
        );
      case 1:
        return (
          <GamingPrefsForm
            handleChange={this.handleChange}
            username={username}
            email={email}
          />
        );
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }

  // can handle multiple value changes
  handleChange = elementName => (event) => {
    this.setState({
      [elementName]: event.target.value,
    });
  };

  checkValidity = () => {

  }


  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleRegister = () => {};

  render() {
    const { classes } = this.props;
    // const {
    //   name, email, password, confirmPassword, activeStep,
    // } = this.state;

    const { activeStep } = this.state;
    const steps = this.getSteps();

    return (
      <div>
        <form>
          <FormFieldsGenerator
            formData={this.state.formData}
            change={newState => this.updateForm(newState)}
          />
        </form>
      </div>
      // <div className="centered">
      //   <Stepper activeStep={activeStep} alternativeLabel>
      //     {steps.map(label => (
      //       <Step key={label}>
      //         <StepLabel>{label}</StepLabel>
      //       </Step>
      //     ))}
      //   </Stepper>
      //   <div>
      //     <div>
      //       {this.getStepContent(activeStep)}

    //       {/* <div> cannot appear as a descendant of <p> -
    //        This error is being fixed by the matiral ui team
    //        i think i can use varian= ? to solve this
    //       <Typography className={classes.instructions}>
    //       </Typography> */}
    //       <div className="stepper-nav-buttons">
    //         <Button
    //           disabled={activeStep === 0}
    //           onClick={this.handleBack}
    //           className={classes.backButton}
    //         >
    //           Back
    //         </Button>
    //         {activeStep === steps.length ? (
    //           <Button variant="contained" color="primary" onClick={this.handleRegister}>
    //             Finish
    //           </Button>
    //         ) : (
    //           <Button variant="contained" color="primary" onClick={this.handleNext}>
    //             Next
    //           </Button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
