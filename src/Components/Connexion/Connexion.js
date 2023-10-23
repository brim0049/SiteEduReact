import {Form, Row, Col} from 'react-bootstrap';
import React from "react";
export default function Connexion(){
  return(
    <>
       <h1>Connexion</h1>
      <div >
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
                <Form.Label >Code permanent</Form.Label>
                <br/>
                <br/>
                <Form.Control type="text" placeholder="Code permanent"
                  name="username"
                />
<br/>
<Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label htmlFor="password">Mot de passe</Form.Label>
                <br/>
                <br/>
                <Form.Control placeholder="Mot de passe"
                  type="password"
                  name="password"
              />
              </Form.Group>
              <br/>
                <button className="btn btn-outline-dark btn-block">
                  <span>Login</span>
                </button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </>

  );
};