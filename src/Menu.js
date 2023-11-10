import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { HashRouter, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import loginReducer from './Reducers/loginReducer';
import { LogoutStudent } from './Services/service';
import { useNavigate } from "react-router-dom";

function Menu({login}) {
  const {isLoggedIn} = login;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(LogoutStudent());
    navigate("./identification");

  }
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" exact replace as={NavLink}>
            <FaHome /> Ministère de l'éducation
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/About" replace as={NavLink}>
            À Propos
            </Nav.Link>
            <Nav.Link to="/contact" replace as={NavLink}>
            Contact
            </Nav.Link> 
            <Nav.Link to="/inscription" replace as={NavLink}>
            {isLoggedIn? null :'Inscription'}
            
            </Nav.Link>
            <Nav.Link to="/identification" replace as={NavLink}>
            {isLoggedIn? null :'Identification'}
            
            </Nav.Link>
            <Nav.Link to="/demande" replace as={NavLink}>
            {isLoggedIn? "Demande d'aide financière" :null}
            </Nav.Link>
            <Nav.Link to="/Consult" replace as={NavLink}>
            {isLoggedIn? "Consultation du dossier de l'étudiant" :null}
            </Nav.Link>
           
            
            </Nav>
            <Nav>
            <div className="ms-auto">            {isLoggedIn? "Consultation du dossier de l'étudiant" :null}
            {isLoggedIn? (<Button onClick={handleLogout} variant="light">Logout</Button>) :null}

            </div>
            </Nav>
        </Container>
      </Navbar>

  );
}
const mapStateToProps = (state) => ({
  login: state.login,
});
export default connect(mapStateToProps, {logout:LogoutStudent})(Menu)
