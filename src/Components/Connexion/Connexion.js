

import {Form, Row, Col} from 'react-bootstrap';
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { LoginStudent } from "../../Services/service";
import { useNavigate } from "react-router-dom";
import LoginViewModel from '../../ViewModels/ConnexionViewModel';
import StudentModel from "../../Models/StudentModel"
import AuthService from '../../Services/AuthService';
function Connexion(props){
  const viewModel = new AuthService();
  // redirect 
  const navigate = useNavigate();
  //get reference
  const form = useRef();
  const checkBtn = useRef();
  // state local
  const stateInput = {
    permanentCode: "",
    password: "",
  };
     //set State
     const [formulaire, setForm] = useState(stateInput);
     //get all values input
    const handleSetForm = ({ target: { name, value } }) => {
  setForm({ ...formulaire, [name]: value });
};
  const handleLogin  = async (e) => {
    const newStudent = new StudentModel(null, null,null,formulaire.permanentCode, formulaire.password);
    const preparedData = LoginViewModel.prepareData(newStudent);

      e.preventDefault();
    try {
        const userData = await AuthService.Auth(preparedData);
        console.log('User data:', userData);
        props.loginn();

        // Gérez la réussite de la connexion
      } catch (error) {
        console.error(error.message);
        // Gérez les erreurs lors de la connexion
      }
    }
   const codeper = localStorage.getItem('CodeD');
   const pswd = localStorage.getItem('PS');
   const successful = localStorage.getItem('sc');
   useEffect(() => {
    console.log('isLoggedIn:', props.login.isLoggedIn);
    // Si l'utilisateur est connecté, redirigez-le vers la page de profil
    if (props.login.isLoggedIn) {
      navigate("../demande");
    }
  }, [props.login.isLoggedIn, navigate]

  );

  return(
    <>
       <h1>Connexion</h1>
      <div >
        <Row>
          <Col>
          {successful!== false ? <h3>Votre code permanent est: {codeper}</h3>: null}
          {successful!== false ? <h3>Votre mot de passe temporaire est: {pswd}</h3>: null}
          </Col>
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
                name="permanentCode"
                onChange={handleSetForm}
                />
<br/>
<Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <br/>
                <br/>
                <Form.Control placeholder="Mot de passe"
                  type="password"
                  name="password"
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