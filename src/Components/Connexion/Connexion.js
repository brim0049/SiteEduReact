

import {Form, Row, Col} from 'react-bootstrap';
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { LoginStudent } from "../../Services/service";
import { useNavigate } from "react-router-dom";

function Connexion(props){

  // redirect 
  const navigate = useNavigate();
  //get reference
  const form = useRef();
  const checkBtn = useRef();
  // state local
  const stateInput = {
    cp: "",
    pswd: "",
  };
  //set State
  const [formulaire, setForm] = useState(stateInput);
 //get all values input
 const handleSetForm = ({ target: { name, value } }) => {
   setForm({ ...formulaire, [name]: value });
 };
    

   //button d'connexion  
 function handleLogin(e) {
   e.preventDefault();
       props.loginn(
         formulaire.cp,
         formulaire.pswd
       )
   }
   useEffect(() => {
    console.log('isLoggedIn:', props.login.isLoggedIn);
    // Si l'utilisateur est connecté, redirigez-le vers la page de profil
    if (props.login.isLoggedIn) {
      navigate("../demande");
    }
  }, [props.login.isLoggedIn, navigate]);

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
            <Form onSubmit={handleLogin} ref={form}>
                <Form.Label >Code permanent</Form.Label>
                <br/>
                <br/>
                <Form.Control type="text" placeholder="Code permanent"
                name="cp"
                value={formulaire.cp}
                onChange={handleSetForm}
                />
<br/>
<Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <br/>
                <br/>
                <Form.Control placeholder="Mot de passe"
                  type="password"
                  name="pswd"
                  value={formulaire.pswd}
                  onChange={handleSetForm}
                />
              </Form.Group>
              <br/>
                <button type='submit' className="btn btn-outline-dark btn-block">
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
const mapStateToProps = (state) => ({
  login: state.login,
});
export default connect(mapStateToProps, {loginn : LoginStudent})(Connexion)