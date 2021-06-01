import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, storeUserInFirestore } from "../../firebase/firebase.utils";

export class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await storeUserInFirestore(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      //  In case React doesn't clear up correctly
      e.target.querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} label="Username" required />
          <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="Email" required />
          <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="Password" required />
          <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} label="Confirm Password" required />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
