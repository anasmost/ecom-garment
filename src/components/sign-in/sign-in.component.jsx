import React, { Component } from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
      // Clear Form manually avoiding some React bug
      e.target.querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label="Email" id="email" type="email" name="email" onChange={this.handleChange} value={this.state.email} required />

          <FormInput label="Password" id="password" type="password" name="password" onChange={this.handleChange} value={this.state.password} required />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSign onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
