import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, } from "../components/Grid";
import { Input } from "../components/Form";
import { withRouter } from 'react-router-dom';

import browsebackgrd from "../images2/browsebkgrd.jpeg";


class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.getUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          // console.log(res.data)
          if (res.data.success) {
            localStorage.setItem("userinfo", JSON.stringify(res.data.userInfo));
            this.props.history.push('/Browse')

          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <div style={{ position: "relative", backgroundImage: `url(${browsebackgrd})` }}>
        <div >
          <Row>
            <Col size="md-6" >

              <Jumbotron>
                <h1 style={{ textAlign: "center" }}>Sign In!</h1>
                <form>
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address (Required)"

                  />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Password (Required)"
                  />
                  <button type="button" className="btn btn-outline-info btn-lg btn-block"
                    disabled={!(this.state.email && this.state.password)}
                    onClick={this.handleFormSubmit}
                  >
                    Sign In
              </button>
                </form>
              </Jumbotron>

            </Col>

            <Col size="md-6">

              <Jumbotron >

                <h1 style={{ textAlign: "center", fontStyle: "" }}>No account yet?</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <a href="/signin" className="btn btn-outline-info btn-lg btn-block">CREATE ACCOUNT</a>

              </Jumbotron>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

            </Col>

          </Row>


        </div>
      </div>

    );
  }
}

export default withRouter(Login);