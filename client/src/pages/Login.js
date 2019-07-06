import React from "react";
import { Col, Row, Container } from "../components/Grid";


function Login() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <div className="card text-center">
              <div className="card-header">
                LOGIN
 </div>
              <div className="card-body">
                <h5 className="card-title">Welcome to Green Thumb</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="google.com" className="btn btn-primary">LOGIN</a>
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

export default Login;