import React from 'react';
import {ListGroup} from 'react-bootstrap';
function Contact() {
  return (
    <div className="container">
      <h1 className="mt-5">Contactez-nous</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <p>Si vous avez des questions ou des commentaires sur l'aide financière aux études, n'hésitez pas à nous contacter par l'un des moyens suivants :</p>

      <ul className="list-group">
        <li className="list-group-item">Par téléphone : 1 800 567-1234</li>
        <li className="list-group-item">Par courriel : <a href="mailto:info@aidefinanciere.gouv.qc.ca">info@aidefinanciere.gouv.qc.ca</a></li>
        <li className="list-group-item">Par la poste :</li>
        <br/>
        <ul>
          <li>Ministère de l'Éducation</li>
          <li>Direction de l'aide financière aux études</li>
          <li>1035, rue De La Chevrotière</li>
          <li>Québec (Québec) G1R 5A5</li>
        </ul>
      </ul>

      <p className="mt-3">Nos heures d'ouverture sont du lundi au vendredi, de 8 h 30 à 16 h 30. Nous vous répondrons dans les meilleurs délais. Merci de votre confiance.</p>
    </div>
  );
}

export default Contact;
