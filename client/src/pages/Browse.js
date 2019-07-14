import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Modal from "../components/Modal";

class Browse extends Component {

    state = {
        plants: [],
        plantClone: [],
        searchTerm: "",
        openModal: false,
        selectedPlant: {},
        name: "",
        picture: "",
        sunlight: "",
        water: "",
        fertilizer: "",
        careSummary: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        },
            () => {
                let searchTerm = this.state.searchTerm;
                if (this.state.plants.length > 0) {
                    let updatedPlants = this.state.plants.filter(e => e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
                    this.setState({ plants: updatedPlants });

                }
                if (searchTerm === "") {
                    this.setState({ plants: this.state.plantClone });
                }

            }
        );
    }




    handleFormSubmit = event => {
        event.preventDefault();
        this.getPlants();
    };

    showDetails = (selectedPlant) => {
        console.log(selectedPlant);
        this.setState({ selectedPlant }, () => {

            const { name, picture, sunlight, water, fertilizer, careSummary } = this.state.selectedPlant
            this.setState({

                openModal: true,
                name,
                picture,
                sunlight,
                water,
                fertilizer,
                careSummary
            })
        })
    }

    cancelModal = () => {
        this.setState({ openModal: false })
    }

    componentDidMount() {
        API.getPlants().then(results => {
            console.log(results)
            this.setState({
                plants: results.data.plants,
                plantClone: results.data.plants
            })
        }).catch(error => {
            console.log(error);
        })

    }
    render() {
        return (
            <div style={{ position: "relative", backgroundColor: "white" }}>
                {
                    this.state.openModal &&
                    <Modal
                        name={this.state.name}
                        picture={this.state.picture}
                        sunlight={this.state.sunlight}
                        water={this.state.water}
                        fertilizer={this.state.fertilizer}
                        careSummary={this.state.careSummary}
                        savePlant={() => this.savePlant()}
                        cancelModal={this.cancelModal}
                    />
                }

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

                    </Row>
                    <Col size="md-12">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Search"
                            name="searchTerm"
                            onChange={this.handleInputChange}
                        />
                    </Col>
                    <Row>
                        {
                            this.state.plants.length > 0 &&
                            this.state.plants.map(e =>
                                <Col key={e.id} size="md-4">
                                    <Card showDetails={() => this.showDetails(e)} title={e.name}>
                                        <img className="img-fluid"
                                            src={e.picture}
                                            alt={e.name} />
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

export default Browse;