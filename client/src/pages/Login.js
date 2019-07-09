import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    books: [],
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sign in!</h1>
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
                  placeholder="Password (required)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Sign in
              </FormBtn>
              </form>
            </Jumbotron>
            </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>No account yet?</h1>
              <br></br>
              <br>
              </br>
              <br></br>
              <br></br>
              <a href="/signin" className="btn btn-success">CREATE ACCOUNT</a>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;