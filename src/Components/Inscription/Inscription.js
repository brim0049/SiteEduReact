import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
export default function Inscription(){
  return(
    <div className="col-md-12">
    <h1> Inscription</h1>
    <Row>
          <Col></Col>
          <Col className="justify-Content-center" md="auto">
            <img
              width="150"
              height="150"
              variant="top"
              src="https://static.thenounproject.com/png/541486-200.png"
            />
          </Col>
          <Col></Col>
        </Row>
        <br/>
        <Row>
          <Col></Col>
          <Col>
            <Form>
                <Form.Label >Numéro d’assurance sociale</Form.Label>
                <br/>
                <br/>
                <Form.Control type="text" placeholder="Numéro d’assurance sociale"
                  name="username"
                />
<br/>
<Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label htmlFor="password">Date de naissance</Form.Label>
                <br/>
                <br/>
                <Form.Control placeholder="Mot de passe"
                  type="date"
                  name="birthday"
              />
              </Form.Group>
              <br/>
                <button className="btn btn-outline-dark btn-block">
                  <span>Inscrire</span>
                </button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
    </div>

  );
};