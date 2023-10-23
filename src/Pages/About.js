import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h1 className="mb-4">À propos de nous</h1>
          <br/>
          <p>
            Le ministère de l'Éducation a pour mission de promouvoir l'éducation et le développement du potentiel des personnes. Nous offrons des services d'aide financière aux étudiants qui poursuivent des études postsecondaires au Québec ou à l'extérieur du Québec.
          </p>
          <p>
            L'aide financière aux études est composée de deux volets : le prêt et la bourse. Le prêt est une somme d'argent que vous devez rembourser après la fin de vos études. La bourse est une somme d'argent que vous n'avez pas à rembourser. Le montant de l'aide financière dépend de plusieurs facteurs, tels que votre situation personnelle, familiale et financière, le coût de vos études et le nombre de mois d'études.
          </p>
          <p>
            Pour être admissible à l'aide financière aux études, vous devez répondre à certains critères, tels que :
          </p>
          <ul>
            <li>Être citoyen canadien, résident permanent, réfugié ou personne protégée;</li>
            <li>Être domicilié au Québec;</li>
            <li>Être inscrit à temps plein ou à temps partiel dans un programme d'études reconnu;</li>
            <li>Avoir des ressources financières insuffisantes pour poursuivre vos études.</li>
          </ul>
          <p>
            Pour plus d'informations sur l'aide financière aux études, contactez-nous.
          </p>
        </Col>
        <Col md={4}>
        <br/>
        <br/>
        <br/>
        <br/>
          <Card className="p-3">
            <h4>Contactez-nous</h4>
            <p>Email: <a href="mailto:contact@votresite.com">contact@votresite.com</a></p>
            <p>Téléphone: 123-456-7890</p>
            <p>Heures d'ouverture :<br />Lundi - Vendredi<br />8 h 30 - 16 h 30</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
