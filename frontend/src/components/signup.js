import React from "react";
import axios from "axios";
import './style.css'

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email:"",
      phNo:"",
      password: "",
      errors: {},
    };
    this.handleChangeName = this.handleChangeName.bind(this);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangeNum = this.handleChangeNum.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeNum(e) {
    this.setState({ phNo: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    if (this.validateForm()) {

      var data = {
          user:{
            name: this.state.name,
            email: this.state.email,
            phNo: this.state.phNo,
            password: this.state.password,
          }
      };
      console.log(data);
      console.log(this.state);
      axios
        .post("http://localhost:3003/user/signup", data)
        .then(function (response) {
          alert(response.data.message);
          window.location.href = "/";
        })
        .catch(function (error) {
          alert(error);
        });
    }
  }

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (!this.state.name) {
      formIsValid = false;

      errors["name"] = "*Please enter your name.";
    }
    if (!this.state.email) {
        formIsValid = false;
  
        errors["email"] = "*Please enter your email.";
      }
    if (!this.state.name) {
        formIsValid = false;
  
        errors["phNo"] = "*Please enter your phone number.";
      }

    if (!this.state.password) {
      formIsValid = false;

      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  render() {
    return (
      <div className="base-containerls" ref={this.props.containerRef}>
        {/* <div className="imagels">
          <img src={Welcome} height="200" width="200" alt="welcome" />
        </div> */}
        <div className="headerls">Create your account</div>
        <div className="contentls">
          <div className="formls">
            <div className="form-groupls">
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChangeName}
                placeholder="Enter UserName"
              />
            </div>
            <div className="errorMsg">{this.state.errors.name}</div>
            <div className="form-groupls">
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="Enter E-mail"
              />
            </div>
            <div className="errorMsg">{this.state.errors.email}</div>
            <div className="form-groupls">
              <input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.handleChangePassword}
                placeholder="Enter Password"
              />
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>
            <div className="form-groupls">
              <input
                type="text"
                name="phNo"
                id="phNo"
                value={this.state.phNo}
                onChange={this.handleChangeNum}
                placeholder="Enter phone number"
              />
            </div>
            <div className="errorMsg">{this.state.errors.phNo}</div>
          </div>
        </div>
        <div className="footerls">
          <button
            onClick={this.submituserRegistrationForm}
            className="buttonlog"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
