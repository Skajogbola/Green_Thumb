import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
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
        savedPlants: results.data.plants,
      })
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
            savedPlants: results.data.plants,
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
        {/* <Nav></Nav> */}
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>G R E E N    T H U M B</strong>
              </h1>
              <h2 className="text-center">Saved Plants of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )} */}
            {/* </Card> */}
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default Saved;
