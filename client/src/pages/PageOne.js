import React from "react";
import { Col, Row, Container } from "../components/Grid";


function PageOne() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">

 </div>
            <div className="card-body">
              <img className="fit-picture"
                src="../images/homepage.jpeg"
                alt="Plants" />

              <h5 className="card-title">Welcome to Green Thumb</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/login" className="btn btn-primary">LOGIN</a>
            </div>
            <div className="card-footer text-muted">
              2 days ago
 </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PageOne;