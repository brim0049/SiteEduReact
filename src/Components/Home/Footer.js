import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4}>
            <h4>À propos de nous</h4>
            <p>
            Bienvenue sur le site Web du ministère de l'Éducation. Notre mission est de promouvoir l'éducation .                </p>
          </Col>
          <Col md={4}>
            <h4>Liens rapides</h4>
            <Row>
              <Col><Button variant="outline-light" href="/">Accueil</Button></Col>
              <Col><Button variant="outline-light" href="/inscription">Inscription</Button></Col>
              <Col><Button variant="outline-light" href="/identification">Identification</Button></Col>
            </Row>
          </Col>
          <Col md={4}>
            <h4>Contactez-nous</h4>
            <p>Email: contact@votresite.com</p>
            <p>Téléphone: 123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
