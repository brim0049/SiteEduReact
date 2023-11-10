import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { registerStudent } from "../../Services/service";
import { useNavigate } from "react-router-dom";
function Inscription(props){
    // redirect 
    const navigate = useNavigate();
   //get reference
   const form = useRef();
   // state local
   const stateInput = {
     nas: "",
     birthday: "",
   };
   //set State
   const [formulaire, setForm] = useState(stateInput);
  //get all values input
  const handleSetForm = ({ target: { name, value } }) => {
    setForm({ ...formulaire, [name]: value });
  };
     

    //*pour connaitre si l'inscription => oki */
    const [successful, setSuccessful] = useState(false);
    //button d'inscription  
  function handleRegister(e) {
    e.preventDefault();
        props.register(
          formulaire.nas,
          formulaire.birthday,
        )
        setSuccessful(true);
    }
      //si inscription oki=> redirect vers login
  if (successful) {
      navigate("../identification"); 
}   
  return(
    <div className="col-md-12">
    <h1> Inscription</h1>
    <Row>
          <Col></Col>
          <Col className="justify-Content-center" md="auto">
            <img
              width="150"
              height="150"
avariant="top"
              src="https://static.thenounproject.com/png/541486-200.png"
            />
          </Col>
          <Col></Col>
        </Row>
        <br/>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={handleRegister} ref={form}>
                <Form.Label >Numéro d’assurance sociale</Form.Label>
                <br/>
                <br/>
                <Form.Control type="text" placeholder="Numéro d’assurance sociale"
                name="nas"
                value={formulaire.nas}
                onChange={handleSetForm}
                />
<br/>
<Form.Group className="mb-3" >
                <Form.Label>Date de naissance</Form.Label>
                <br/>
                <br/>
                <Form.Control
                  type="text"
                  name="birthday"
                  value={formulaire.birthday}
                  onChange={handleSetForm}              />
              </Form.Group>
              <br/>
                <button type='submit' className="btn btn-outline-dark btn-block">
                  <span>Inscrire</span>
                </button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
    </div>

  );
};
export default connect(null, {register : registerStudent})(Inscription)