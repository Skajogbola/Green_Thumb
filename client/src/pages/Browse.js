import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

class Browse extends Component {

    state = {
        plants: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


getPlants = () => {
    API.getPlants(this.state.q)
        .then(res =>
            this.setState({
                plants: res.data
            })
        )
        .catch(() =>
            this.setState({
                plants: [],
                message: "No Plants Found, Try a Different Plant!"
            })
        );
};

handleFormSubmit = event => {
    event.preventDefault();
    this.getPlants();
};

render() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="text-center">
                            <strong>Plant Search</strong>
                        </h1>
                        <h2 className="text-center">Search for and Save Plants of Interest.</h2>
                    </Jumbotron>
                </Col>
                <Col size="md-12">
                    <Card title="Plant Search" icon="far fa-plant">
                        <Form
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            q={this.state.q}
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Card title="Results">
                        {this.state.plants.length ? (
                            <List>
                                {this.state.plants.map(book => (
                                    // <Book
                                    //     key={book.id}
                                    //     title={book.volumeInfo.title}
                                    //     subtitle={book.volumeInfo.subtitle}
                                    //     link={book.volumeInfo.infoLink}
                                    //     authors={book.volumeInfo.authors.join(", ")}
                                    //     description={book.volumeInfo.description}
                                    //     image={book.volumeInfo.imageLinks.thumbnail}
                                    Button = {() => (
                                            <button
                                    onClick={() => this.handlePlantSave(plant.id)}
                                    className="btn btn-primary ml-2"
                                >
                                    Save
                        </button>
                                )}
                            />
                        ))}
                            </List>
                        ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                    </Card>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}
}

export default Browse;