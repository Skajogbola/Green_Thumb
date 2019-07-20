import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import browsebackgrd from "../images2/browsebkgrd.jpeg";
import { Col, Row, Container } from "../components/Grid";
// import Nav from "../components/Nav";
import { Link } from "react-router-dom";




class Saved extends Component {
  state = {
    savedPlants: [],
    userInfo: {},
    userName: ""
  };

  componentDidMount() {
    // console.log("hi")
    API.getSavedPlants().then(results => {
      console.log("Saved Plants", results)

      this.setState({
        savedPlants: results.data,
      }, () => console.log(this.state.savedPlants))
    }).catch(error => {
      console.log(error);
    })

    //get the value for the userinfo and set it as a variable if not null update the value from the string to an object
    var userInfo = localStorage.getItem("userinfo")
    // console.log(userInfo)
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.setState({ userInfo, userName: userInfo.firstName }, () => {
        API.getSavedPlants({ userId: this.state.userInfo.id }).then(results => {
          console.log(results)
          this.setState({
            savedPlants: results.data,
          })
        }).catch(error => {
          console.log(error);
        })
      })
    }

  }

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong><Link className="navbar-brand link" to="/" style={{ color: "gray" }}> <i className="fas fa-thumbs-up"></i>
                </Link>G R E E N    T H U M B</strong>
              </h1>
              <h2 className="text-center">Welcome to your saved plants {this.state.userName}</h2>

            </Jumbotron>
          </Col>
        </Row>


      <div style={{ position: "relative", width:"100%", height:"100%", backgroundImage: `url(${browsebackgrd})` }}>
        {/* <Nav></Nav> */}

        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>G R E E N    T H U M B</strong>
                </h1>
                <h2 className="text-center">Welcome to your saved plants {this.state.userName}</h2>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            {
              this.state.savedPlants.length > 0 &&
              this.state.savedPlants.map(e =>
                <Col key={e.id}
                  size="md-6">
                  <Card
                    title={e.name}>
                    <p>{e.careSummary}</p>
                    <img className="img-fluid"
                      style={{ maxHeight: "300px", maxWidth: "300px" }}
                      src={e.picture} alt={e.id}
                    />
                  </Card>
                </Col>
              )
            }
          </Row>

        </Container>
      </div>
    );
  }
}

export default Saved;
