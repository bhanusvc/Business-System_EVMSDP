import React, { Component } from "react";
import '../css/login.css'
import Button from '@mui/material/Button';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/mslider";
        }
        else
        {
          alert("Enter Valid Credentials")
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="log"></div>
        <div className="lo">
        <h2>Log In</h2>

        <div className="em">
          <label>Email</label>
          <input
            type="email"
            className="form-control1" 
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="em">
          <label>Password</label>
          <input
            type="password"
            className="form-control1"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
     
       
          <Button variant="contained" type="submit" id="x" className="btn btn-primary">
            Submit
          </Button>
     
        <p className="forgot">
          <Button variant="contained"><a href="/Signup">Sign Up</a></Button>
        </p>
      </div>
      </form>
  );
  }
}