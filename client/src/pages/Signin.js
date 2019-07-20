import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import signinbg2 from "../images2/signinbg2.jpg";


class Signin extends Component {
  state = {
    info: [],
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    navigate: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.saveInfo();
  }

  saveInfo = () => {
    if (this.state.firstname && this.state.lastname && this.state.email && this.state.password) {
      API.loginInfo({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => {
          console.log(res.data);
          localStorage.setItem("userinfo", JSON.stringify(res.data.userInfo));
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { navigate } = this.state
    if (navigate) {
      return <Redirect to="/Browse" push={true} />
    }
    return (

      <div style={{ position: "relative", width:"100%", height:"800px", backgroundImage: `url(${signinbg2})` }}>

        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Let Us Sign You Up!</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                  name="firstname"
                  placeholder="First Name (required)"
                />
                <Input
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                  name="lastname"
                  placeholder="Last Name (required)"
                />
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
                  disabled={!(this.state.firstname && this.state.lastname && this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  SUBMIT
              </FormBtn>
              <a href="/login" className="btn btn-success"> Sign In </a>
              </form>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Signin;