import React, { useState, useEffect } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import ConsultViewModel from '../ViewModels/ConsultViewModel';
function Consult() {
 
  const [studentData, setStudentData] = useState({});
  const [totalLoanPortion, setTotalLoanPortion] = useState(0);
  const [totalGrantPortion, setTotalGrantPortion] = useState(0);
  const [montantsVerses, setMontantsVerses] = useState([]);
  const consultViewModel = new ConsultViewModel();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await consultViewModel.getStudentData();
        setStudentData(data.studentData);
        const loanTotal = data.financialAidData.reduce((total, aid) => total + aid.loanPortion, 0);
        const grantTotal = data.financialAidData.reduce((total, aid) => total + aid.grantPortion, 0);
        setTotalLoanPortion(loanTotal);
        setTotalGrantPortion(grantTotal);        
        setMontantsVerses(data.montantsVersesData); // Mettre à jour les montants versés ici
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <Container className="mt-5">
      <h1>Consultation du dossier de l'étudiant</h1>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Renseignements personnels</Card.Title>
          <Card.Text>
            <p>Adresse de correspondance : {studentData.correspondenceAddress}</p>
            <p>Numéro de téléphone : {studentData.phoneNumber}</p>
            <p>Adresse de courriel : {studentData.email}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Calcul de l'aide financière</Card.Title>
          <Card.Text>
            <p>Portion de prêt : {totalLoanPortion} $</p>
            <p>Portion de bourse : {totalGrantPortion} $</p>
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
            {montantsVerses && montantsVerses.length > 0 && montantsVerses.map((montant, index) => (
          <tr key={index}>
            <td> {(() => {
          const date = new Date(montant.transactionDate);
          const day = date.getDate();
          const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc +1
          const year = date.getFullYear();
          return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
        })()}</td>
            <td>{montant.transactionType === 0 ? 'Prêt' : 'Bourse'}</td>
            <td>{montant.amount} $</td>
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
