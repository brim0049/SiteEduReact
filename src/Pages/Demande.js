import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import StudentModel from '../Models/StudentModel'
import DemandeViewModel from '../ViewModels/DemandeViewModel';
import StuService from '../Services/StudentService';
import FinancialAidApplication from '../Models/FinancialAidApplicationModel';
import { useNavigate } from "react-router-dom";

function Demande() {
  const si={
      employmentIncomeLastYear:'',
      otherIncomeLastYear:'',
      potentialIncomeCurrentYear:'',
      loanPortion:'',
      grantPortion:'',
      financialTransactions:''
  }
  const stateInput = {
    lastName: '',
    firstName: '',
    socialSecurityNumber: '',
    correspondenceAddress: '',
    phoneNumber: '',
    citizenship: '',
    immigrationCode: '',
    datePermanentResident: '',
    languagePreference:'',
    email: '',
    institutionName: '',
    programCode: '',
    creditCount: 0,
    maritalStatus:'',
    dateMaritalStatus: '',
  };
  
  const navigate = useNavigate();
    
     //set State
     const [identite, setIdentite] = useState(stateInput);
     //get all values input
     const handleSetForm = ({ target: { name, value } }) => {
      setIdentite({ ...identite, [name]: value });
     };
  const [financieres, setFinancieres] = useState({ si });
  const handleSetFinance = ({ target: { name, value } }) => {
    setFinancieres({ ...financieres, [name]: value });
   };
   const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage

  const handleSubmit = async (e) => {
    const newStudent = new StudentModel( null,
      identite.socialSecurityNumber,
     null,
     null,
     null,
      identite.firstName,
      identite.lastName,
      identite.correspondenceAddress,
      identite.phoneNumber,
      identite.email,
      identite.citizenship,
      identite.immigrationCode,
      identite.datePermanentResident,
      identite.languagePreference,
      identite.dateMaritalStatus,
      identite.maritalStatus,
      identite.institutionName,
      identite.programCode,
      identite.creditCount,
       );
   const DemandeFinanciere = new FinancialAidApplication(newStudent,user,financieres.employmentIncomeLastYear, financieres.otherIncomeLastYear, financieres.potentialIncomeCurrentYear)
    e.preventDefault();
    // Ici, vous pouvez envoyer les données de demande d'aide financière au serveur ou effectuer toute autre action requise.
    try {
      const preparedData = DemandeViewModel.prepareData(newStudent);

    const demandeStudent = await StuService.updateStudent(user, preparedData);
    const demandeFinan = await StuService.DemandeFin(user, DemandeFinanciere);
    console.log('Étudiant inscrit :', demandeStudent);
    console.log('Étudiant inscrit :', demandeFinan);
    // Gérez la réussite de l'inscription
    navigate("../consult");

  } catch (error) {
    console.error(error.message);
    // Gérez les erreurs lors de l'inscription
  }

  };
  useEffect(() => {
    const savedData = localStorage.getItem('savedFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setIdentite(parsedData.identite);
      setFinancieres(parsedData.financieres);
      // Vous pouvez également nettoyer les données sauvegardées après les avoir chargées si nécessaire.
      localStorage.removeItem('savedFormData');
    }
  }, []); // Le tableau vide des dépendances assure que ce code s'exécutera une seule fois
  
  //se
  const handleReset = () => {
    setFinancieres(si); // Réinitialiser les valeurs des champs du formulaire à l'état initial 
    setIdentite(stateInput); // Réinitialiser les valeurs des champs du formulaire à l'état initial
  };
  const handleSaveLocally = () => {
    localStorage.setItem('savedFormData', JSON.stringify({ identite, financieres }));
    // Vous pouvez également afficher un message pour indiquer que la sauvegarde a été effectuée avec succès.
    alert('Les données ont été sauvegardées localement.');
  };

  return (
    <Container>
      <h1 className="mb-4">Demande d'aide financière</h1>
      <Form onSubmit={handleSubmit}>
        {/* Section "Identité de l'étudiant" */}
        <h3>Identité de l'étudiant</h3>
        <Row>
          <Col>
          <Form.Group controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={identite.lastName}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="prenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={identite.firstName}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Group controlId="NAS">
              <Form.Label>Numéro d'assurance social</Form.Label>
              <Form.Control
                type="text"
                name="socialSecurityNumber"
                value={identite.socialSecurityNumber}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
          <Col sm={8}>
            <Form.Group controlId="adresse">
              <Form.Label>Adresse de correspondance</Form.Label>
              <Form.Control
                type="text"
                name="correspondenceAddress"
                value={identite.correspondenceAddress}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="num">
              <Form.Label>Numero de téléphone</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={identite.phoneNumber}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cit">
              <Form.Label>Citoyenneté</Form.Label>
              <Form.Control
                type="text"
                name="citizenship"
                value={identite.citizenship}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Group controlId="code">
              <Form.Label>Code d'immigration</Form.Label>
              <Form.Control
                type="text"
                name="immigrationCode"
                value={identite.immigrationCode}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="date">
              <Form.Label>Date d'obtention de statut de résident permanent ou de réfugié</Form.Label>
              <Form.Control
                type="text"
                name="datePermanentResident"
                value={identite.datePermanentResident}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Group controlId="langue">
              <Form.Label>Langue de correspondance</Form.Label>
              <Form.Select
               name="languagePreference"
               value={identite.languagePreference}
               onChange={handleSetForm}>
                <option value="English">English</option>
                <option value="French">French</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={identite.email}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <h3>Renseignement scolaire</h3>
        <Row>
          <Col>
            <Form.Group controlId="etablissement">
              <Form.Label>Nom de l'établissement</Form.Label>
              <Form.Control
                type="text"
                name="institutionName"
                value={identite.institutionName}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="programme">
              <Form.Label>Code du programme</Form.Label>
              <Form.Control
                type="text"
                name="programCode"
                value={identite.programCode}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Form.Group controlId="credits">
              <Form.Label>Nombre de crédits</Form.Label>
              <Form.Control
                type="number"
                name="creditCount"
                value={identite.creditCount}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <h3>Situation de l'étudiant</h3>
        <Row>
          <Col>
            <Form.Group controlId="etatMatrimonial">
              <Form.Label>État matrimonial</Form.Label>
              <Form.Select
               name="maritalStatus"
               value={identite.maritalStatus}
               onChange={handleSetForm}>
                <option value="">Sélectionnez l'état matrimonial</option>
                <option value="0">Célibataire</option>
                <option value="1">Marié(e)</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dateDebut">
              <Form.Label>Date de début de l'état matrimonial</Form.Label>
              <Form.Control
                type="text"
                name="dateMaritalStatus"
                value={identite.dateMaritalStatus}
                onChange={handleSetForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>
       

        {/* Section "Ressources financières" */}
        <h3>Ressources financières</h3>
        <Row>
          <Col>
          <Form.Group controlId="revenus">
          <Form.Label>Revenus d’emploi </Form.Label>
          <Form.Control
           type="number" 
           name="employmentIncomeLastYear"
          value={financieres.employmentIncomeLastYear} 
          onChange={handleSetFinance}/>
                </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="autresRevenus">
          <Form.Label>Autres revenus de l’année dernière  </Form.Label>
          <Form.Control type="number" 
           name="otherIncomeLastYear"
          value={financieres.otherIncomeLastYear} 
          onChange={handleSetFinance}/>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="revenusAnneeEnCours">
          <Form.Label>Revenus de l'année en cours</Form.Label>
          <Form.Control 
          type="number" 
          name ="potentialIncomeCurrentYear"
          value={financieres.potentialIncomeCurrentYear} 
          onChange={handleSetFinance}/>
          </Form.Group>
          </Col>
        </Row>
        <br/>
        <Row>
        <Form.Check
          required
          label="je confirme la validité des renseignements entrés"
        />
        </Row>
       
        <br/>
        <br/>
         <Row>
          <Col>
          <Button variant="secondary" type="submit" onClick={handleReset}>Annuler la demande</Button>
          </Col>
          <Col>
          <Button variant="primary"  onClick={handleSaveLocally}>Sauvegarder la demande</Button>
  
          </Col>
          <Col>
          <Button variant="success" type="submit">Soumettre la demande</Button>
          </Col>
         </Row>
         <br/>
         <br/>
         <br/>
      </Form>
    </Container>
  
  );
}

export default Demande;
