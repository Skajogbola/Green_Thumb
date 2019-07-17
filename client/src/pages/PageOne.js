import React from "react";
import { Col, Container } from "../components/Grid";

function PageOne() {
  return (

    <Container fluid>

      <div>
        <Col size="md-12" >
          <div className="card text-center">
            {/* <div className="card-header" >
              Featured
              </div> */}
            <div className="card-body" >
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
                top: "350px",
                zindex: 9,

              }}>
                <h5 className="card-title" >Welcome to Green Thumb</h5>
                <p className="card-text" >Your one stop source for all things indoor plants.</p>
                <a href="/login" className="btn btn-primary">START</a>
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