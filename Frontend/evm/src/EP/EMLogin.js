import React, { Component } from "react";
import '../css/login.css'
import '../index.css'
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
        else {
          alert("Enter Valid Credentials")
        }
      });
  }
  render() {
    return (
      <div className="lo">
        <form onSubmit={this.handleSubmit}>
         
            <h3 className="log">Log In</h3>


            <label  className="log">Email</label>
            <input  className="log"
              type="email"
             
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />



            <label  className="log">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />



            <button type="submit"  className="log">
              Submit
            </button>

            <p className="forgot-password text-right">
              <Button variant="contained"><a href="/Signup">Sign Up</a></Button>
            </p>
          
        </form>
      </div>
    );
  }
}