import React from "react";
import axios from "axios";
import './style.css'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      errors: {},
    };
    this.handleChangeName = this.handleChangeName.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    if (this.validateForm()) {

      var data = {
        name: this.state.name,

        password: this.state.password,
      };

      axios
        .post("http://localhost:3003/user/login", data)
        .then(function (response) {
          console.log(response);
          if (response.data.response === true) {
            window.location.href = "/vote";
            sessionStorage.setItem("user", "true");
          } else {
            alert("oops..Try again");
            window.location.href = "/";
          }
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
        <div className="headerls">Login</div>
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
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.handleChangePassword}
                placeholder="Enter Password"
              />
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>
          </div>
        </div>
        <div className="footerls">
          <button
            onClick={this.submituserRegistrationForm}
            className="buttonlog"
          >
            Login
          </button>
          <p>New to website!!<a href="/signup">signup</a></p>
        </div>
      </div>
    );
  }
}
