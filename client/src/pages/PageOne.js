import React from "react";
import { Col, Container } from "../components/Grid";

function PageOne() {
  return (

    <Container fluid>

      <div>
        <Col size="md-12" >

          <div className="card text-center" style={{ backgroundColor: "grey" }}>
            {/* <div className="card-header" >
              Featured
              </div> */}
            <div className="card-body" style={{ backgroundColor: "grey" }}>
              <img className="fit-picture"
                src="../images/homepage.jpeg"
                alt="Plants" />
              <div className="login" style={{
                textAlign: "center",
                color: "charcoal",
                fontWeight: "bolder",
                fontSize: "25px",
                width: "100%",
                height: "150px",
                position: "absolute",
                top: "50px",
                zindex: 9,


              }}>
                <h1 className="card-title" style={{ fontSize: 55 }}>Welcome to Green Thumb</h1>
                <p className="card-text" >Your one stop source for all things indoor plants.</p>
                <p> At Green Thumb, we believe everyone should live with  </p>
                <p>a little more green. </p>
                <p>We are here to help strengthen your relationship with plants. </p>
                <p>We make caring for plants easy by setting you up with the tips and tricks </p>
                <p> you need to help your plants thrive. </p>
                <p>Plants make life better. We make plants easy.</p>
                <p>Click below to start building your plant collection!</p>
                <a href="/login" className="btn btn-secondary">START</a>
              </div>
            </div>
            {/* <div className="card-footer text-muted">
              2 days ago
              </div> */}
          </div>

        </Col>
      </div>


    </Container>
  );
}

export default PageOne;