import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Signin extends Component {
  state = {
    info: [],
    firstname: "",
    lastname: "",
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
    if (this.state.firstname && this.state.lastname && this.state.email && this.state.password) {
      API.saveBook({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Let Us Sign You Up!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="firstname"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="lastname"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email Address (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Sign In
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signin;