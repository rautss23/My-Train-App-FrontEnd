import React, { Component } from "react";
import "./RegistrationForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert, Jumbotron } from "react-bootstrap";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      name: "",
      age: "",
      gender: "Male",
      email: "",
      password: "",
      contact: null,
      roles: "ROLE_USER",
      bookings: [],
      errors: {
        usernameError: "",
        nameError: "",
        passwordError: "",
        emailError: "",
        ageError: "",
        contactError:"",
      },
      response: "",
    };
  }

  changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      errors: {
        usernameError: "",
        nameError: "",
        passwordError: "",
        emailError: "",
        ageError: "",
        contactError:"",
      },
      [name]: value,
    });
  };

  validateForm = () => {
    let valid = true;
    let er = this.state.errors;
    if (this.state.name.length < 5 || this.state.name.length > 21) {
      er.nameError = "Name must be between than 6 to 20 characters!";
    }
    if (this.state.username.length < 5 || this.state.username.length > 10) {
      er.usernameError = "UserName must be between 5 to 9 characters!";
    }
    if (this.state.password.length < 7 || this.state.password.length > 11) {
      er.passwordError = "Password be between 8 to 10 characters!";
    }
    if (!validEmailRegex.test(this.state.email)) {
      er.emailError = "Invalid Email!";
    }
    if (this.state.age < 12 || this.state.age > 100) {
      er.ageError = "Enter valid age";
    }
    if (this.state.contact < 999999999 || this.state.contact > 10000000000) {
      er.contactError = "Enter valid contact";
    }
    this.setState({
      errors: er,
    });
    Object.values(this.state.errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      axios.post("http://localhost:8081/register", this.state).then((res) => {
        this.setState({
          response: res.data,
        });
      });
    }
  };

  render() {
    const { username, name, age, gender, email, password, contact } =
      this.state;

    return (
      <div>
        {this.state.response === "" ? (
          <div class="container register">
            <div class="row">
              <div class="col-md-3 register-left">
                <img src="registerhere.png" alt="register here" />
                <h3>Welcome</h3>
                <p>You are 1 step away from being a part of us!</p>
                <Link to='/login'>
                        <input type="submit" name="" value="Login"/>
                </Link>
              </div>
              <div class="col-md-9 register-right">
                <div class="tab-content" id="myTabContent">
                  <h3 class="register-heading">Register</h3>
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        {this.state.errors.nameError && (
                          <Alert variant="danger">
                            {this.state.errors.nameError}
                          </Alert>
                        )}
                        <input
                          type="text"
                          class="form-control"
                          autocomplete="off"
                          placeholder="Name *"
                          value={name}
                          name="name"
                          id="name"
                          onChange={this.changeHandler}
                          required
                        />
                      </div>

                      <div class="form-group">
                        {this.state.errors.usernameError && (
                          <Alert variant="danger">
                            {this.state.errors.usernameError}
                          </Alert>
                        )}
                        <input
                          type="text"
                          class="form-control"
                          autocomplete="off"
                          placeholder="Username *"
                          value={username}
                          name="username"
                          id="username"
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div class="form-group">
                        {this.state.errors.passwordError && (
                          <Alert variant="danger">
                            {this.state.errors.passwordError}
                          </Alert>
                        )}
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password *"
                          value={password}
                          name="password"
                          id="password"
                          onChange={this.changeHandler}
                        />
                      </div>

                      <div class="form-group">
                      {this.state.errors.contactError && (
                          <Alert variant="danger">
                            {this.state.errors.contactError}
                          </Alert>
                        )}
                        <input
                          type="number"
                          name="contact"
                          class="form-control"
                          placeholder="Contact *"
                          value={contact}
                          id="contact"
                          onChange={this.changeHandler}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        {this.state.errors.emailError && (
                          <Alert variant="danger">
                            {this.state.errors.emailError}
                          </Alert>
                        )}
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email *"
                          value={email}
                          name="email"
                          id="email"
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div class="form-group">
                        {this.state.errors.ageError && (
                          <Alert variant="danger">
                            {this.state.errors.ageError}
                          </Alert>
                        )}
                        <input
                          type="number"
                          name="age"
                          class="form-control"
                          placeholder="Age *"
                          value={age}
                          id="age"
                          onChange={this.changeHandler}
                        />
                      </div>

                      <div class="form-group">
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          value={gender}
                          onChange={this.changeHandler}
                          required
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>

                      <input
                        type="submit"
                        class="btnRegister"
                        value="Register"
                        onClick={this.submitHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <Link to="/login">
              <Jumbotron
                className="text-center bg-dark text-warning jumbotron"
                style={{ marginTop: "50px" }}
              >
                <h2>
                  <strong>{this.state.response}</strong>
                </h2>
                <p className="text-white">
                  Thank You for being a part of our Network!
                </p>
              </Jumbotron>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default RegistrationForm;
