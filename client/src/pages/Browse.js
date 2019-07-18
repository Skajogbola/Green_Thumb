import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Modal from "../components/Modal";
import browsebackgrd from "../images2/browsebkgrd.jpeg";
import Nav from "../components/Nav";
// import "./"


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


    savePlant = () => {
        var plantId = this.state.selectedPlant.id;
        var userId = this.state.userInfo.id;
        // console.log(this.state.userInfo, this.state.selectedPlant);
        API.savePlants({ plantId, userId }).then(results => {
            console.log(results)
            this.cancelModal()
        }).catch(error => {
            console.log(error);
        })
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

        //get the value for the userinfo and set it as a variable if not null update the value from the string to an object
        var userInfo = localStorage.getItem("userinfo")
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            this.setState({ userInfo })
        }

    }


    render() {
        return (

            <div style={{ position: "relative", backgroundImage: `url(${browsebackgrd})` }}>
                <Nav></Nav>
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

                <Container >
                    <Row>
                        <Col size="md-12" >
                            <Jumbotron style={{
                                opacity: 8,

                            }} >
                                <h1 className="text-center">
                                    <strong>G R E E N    T H U M B</strong>
                                </h1>
                                <h2 className="text-center">Search for and Save Plants of Interest.</h2>
                            </Jumbotron> 

                        </Col>

                    </Row>
                    <Col size="md-12" >
                        <input style={{ color: "white" }}
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
                                    <Card
                                        showDetails={() => this.showDetails(e)} title={e.name}>
                                        <img className="img-fluid" style={{ maxHeight: "300px", maxWidth: "300px" }}
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