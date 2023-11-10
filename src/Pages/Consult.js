import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

function Consult() {
  // Exemple de données de dossier de l'étudiant (à remplacer par vos propres données)
  const renseignementsPersonnels = {
    adresseCorrespondance: '123 Rue de l\'Étudiant, Ville, Province',
    numeroTelephone: '123-456-7890',
    adresseEmail: 'etudiant@example.com',
  };

  const calculAideFinanciere = {
    portionPret: 3000,
    portionBourse: 2000,
  };

  const montantsVerses = [
    { dateVersement: '01/01/2023', type: 'Prêt', montant: 1000 },
    { dateVersement: '15/02/2023', type: 'Bourse', montant: 500 },
    { dateVersement: '30/03/2023', type: 'Prêt', montant: 700 },
  ];

  return (
    <Container className="mt-5">
      <h1>Consultation du dossier de l'étudiant</h1>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Renseignements personnels</Card.Title>
          <Card.Text>
            <p>Adresse de correspondance : {renseignementsPersonnels.adresseCorrespondance}</p>
            <p>Numéro de téléphone : {renseignementsPersonnels.numeroTelephone}</p>
            <p>Adresse de courriel : {renseignementsPersonnels.adresseEmail}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Calcul de l'aide financière</Card.Title>
          <Card.Text>
            <p>Portion de prêt : {calculAideFinanciere.portionPret} $</p>
            <p>Portion de bourse : {calculAideFinanciere.portionBourse} $</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Montants versés</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date du versement</th>
                <th>Type</th>
                <th>Montant</th>
              </tr>
            </thead>
            <tbody>
              {montantsVerses.map((montant, index) => (
                <tr key={index}>
                  <td>{montant.dateVersement}</td>
                  <td>{montant.type}</td>
                  <td>{montant.montant} $</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Consult;
