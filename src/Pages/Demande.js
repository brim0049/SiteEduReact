import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Demande() {
  const [identite, setIdentite] = useState({ nom: '', prenom: '', email: '', motDePasse: '' });
  const [scolarite, setScolarite] = useState({ etablissement: '', programme: '', credits: 0 });
  const [situation, setSituation] = useState({ etatMatrimonial: '', dateDebut: '' });
  const [financieres, setFinancieres] = useState({ revenusAnneeDerniere: 0, revenusAnneeEnCours: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez envoyer les données de demande d'aide financière au serveur ou effectuer toute autre action requise.
    console.log('Demande d\'aide financière soumise :', { identite, scolarite, situation, financieres });
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
          <Form.Control type="text" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="prenom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" value={identite.prenom} onChange={(e) => setIdentite({ ...identite, prenom: e.target.value })} required />
        </Form.Group>
            </Col>
            <Row>
            <Col sm ={4}>
            <Form.Group controlId="NAS">
          <Form.Label>Numéro d'assurance social</Form.Label>
          <Form.Control type="text" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            <Col sm={8}>
            <Form.Group controlId="adresse">
          <Form.Label>Adresse de correspondance</Form.Label>
          <Form.Control type="text" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group controlId="num">
          <Form.Label>Numero de téléphone</Form.Label>
          <Form.Control type="text" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="cit">
          <Form.Label>Citoyenneté</Form.Label>
          <Form.Control type="text" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col sm={4} >
            <Form.Group controlId="code">
          <Form.Label>Code d'immigration</Form.Label>
          <Form.Control type="text" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="date">
          <Form.Label>Date d'obtention de status de resident permanenet ou de réfugié</Form.Label>
          <Form.Control type="date" value={identite.nom} onChange={(e) => setIdentite({ ...identite, nom: e.target.value })} required />
        </Form.Group>
            </Col>
            </Row>
             <Row>
            <Col sm={4}>
            <Form.Group controlId="langue">
          <Form.Label>Langue de correspondance</Form.Label>
          <Form.Select>
          <option value="en">English</option>
        <option value="fr">French</option>
            </Form.Select>
        </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={identite.email} onChange={(e) => setIdentite({ ...identite, email: e.target.value })} required />
        </Form.Group>
            </Col>
            </Row>
            
        </Row>
       
        {/* Section "Renseignement scolaire" */}
        <h3>Renseignement scolaire</h3>
        <Row>
            <Col>
            <Form.Group controlId="etablissement">
          <Form.Label>Nom de l'établissement</Form.Label>
          <Form.Control type="text" value={scolarite.etablissement} onChange={(e) => setScolarite({ ...scolarite, etablissement: e.target.value })} required />
        </Form.Group>
        </Col>
            <Col>
            <Form.Group controlId="programme">
          <Form.Label>Code du programme</Form.Label>
          <Form.Control type="text" value={scolarite.programme} onChange={(e) => setScolarite({ ...scolarite, programme: e.target.value })} required />
        </Form.Group>
            </Col>
            <Col sm={2}>
            <Form.Group controlId="credits">
          <Form.Label>Nombre de crédits</Form.Label>
          <Form.Control type="number" value={scolarite.credits} onChange={(e) => setScolarite({ ...scolarite, credits: parseInt(e.target.value) })} required />
        </Form.Group>
            </Col>
        </Row>

        {/* Section "Situation de l'étudiant" */}
        <h3>Situation de l'étudiant</h3>
        <Row>
            <Col>
            <Form.Group controlId="etatMatrimonial">
          <Form.Label>État matrimonial</Form.Label>
          <Form.Select>
          <option value="">Sélectionnez l'état matrimonial</option>
        <option value="celibataire">Célibataire</option>
        <option value="marié">Marié(e)</option>
        <option value="divorce">Divorcé(e)</option>
            </Form.Select>
        </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="dateDebut">
          <Form.Label>Date de début de l'état matrimonial</Form.Label>
          <Form.Control type="date" value={situation.dateDebut} onChange={(e) => setSituation({ ...situation, dateDebut: e.target.value })} required />
        </Form.Group>
            </Col>
        </Row>
       
       

        {/* Section "Ressources financières" */}
        <h3>Ressources financières</h3>
        <Row>
          <Col>
          <Form.Group controlId="revenusAnneeDerniere">
          <Form.Label>Revenus de l'année dernière</Form.Label>
          <Form.Control type="number" value={financieres.revenusAnneeDerniere} onChange={(e) => setFinancieres({ ...financieres, revenusAnneeDerniere: parseFloat(e.target.value) })} required />
        </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="revenusAnneeEnCours">
          <Form.Label>Revenus de l'année en cours</Form.Label>
          <Form.Control type="number" value={financieres.revenusAnneeEnCours} onChange={(e) => setFinancieres({ ...financieres, revenusAnneeEnCours: parseFloat(e.target.value) })} required />
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
          <Button variant="secondary" type="submit">Annuler la demande</Button>
          </Col>
          <Col>
          <Button variant="primary" type="submit">Sauvegarder la demande</Button>
  
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
