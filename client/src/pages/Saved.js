import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import Nav from "../components/Nav";


// import { List } from "../components/List";

class Saved extends Component {
  state = {
    savedPlants: [],
    userInfo: {}
  };

  componentDidMount() {
    console.log("hi")
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
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.setState({ userInfo }, () => {
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
                <strong>G R E E N    T H U M B</strong>
              </h1>
              <strong>Welcome to your saved Plants</strong>
              {/* <h2 className="text-center">Search for and Save Books of Interest.</h2> */}
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          {/* <Col size="md-6">
            <Card> */}
          {
            this.state.savedPlants.length > 0 &&
            this.state.savedPlants.map(e =>
              // <div key={e.id}>
              <Col key={e.id}
                size="md-6">
                <Card
                  title={e.name}>
                  <p>{e.careSummary}</p>
                  {/* // <h3>{e.name}</h3>
                    // <p>{e.careSummary}</p> */}
                  <img className="img-fluid"
                    // style={{ maxHeight: "300px", maxWidth: "300px" }}
                    src={e.picture} alt={e.id}
                  />
                  {/* </div> */}
                  {/* )
              } */}
              </Card>
                {/* </Card> */}
              </Col>
            )
          }
        </Row>
      </Container>
        );
      }
    }
    
    export default Saved;
