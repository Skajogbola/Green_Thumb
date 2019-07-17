import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
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
          console.log(res.data)
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

      <Container style={{ backgroundImage: `url(${browsebackgrd})` }}>
        <div >
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1 style={{ textAlign: "center" }}>Sign in!</h1>
                <form>
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address (required)"
                  />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Password (required)"
                  />
                  <FormBtn
                    disabled={!(this.state.email && this.state.password)}
                    onClick={this.handleFormSubmit}
                  >
                    Sign In
              </FormBtn>
                </form>
              </Jumbotron>
            </Col>

            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1 style={{ textAlign: "center" }}>No account yet?</h1>
                <br></br>
                <br>
                </br>
                <br></br>
                <br></br>
                <a href="/signin" className="btn btn-success">CREATE ACCOUNT</a>
              </Jumbotron>
            </Col>
          </Row>

        </div>
      </Container>

    );
  }
}

export default withRouter(Login);