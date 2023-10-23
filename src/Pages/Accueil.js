import React from "react";
import {Card, Col, Row, Button} from 'react-bootstrap';
import homeImage from '../Images/home.jpg';
import identiImage from '../Images/identi.jpeg';
import inscriImage from '../Images/inscriptions.jpg';
import nouv1Image from '../Images/nouv1.jpg';
import nouv2Image from '../Images/nouv2.jpg';
import nouv3Image from '../Images/nouv3.jpg';
import {BsFillFilePersonFill} from 'react-icons/bs'
import {MdArticle} from 'react-icons/md'
import {GiInjustice} from 'react-icons/gi'
import Footer from "../Components/Home/Footer";
export default function Accueil(){
    const buttonContainerStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        display: 'flex',
        flexDirection: 'column',
      };
  return(
    <>
    <Card className="bg-dark text-white">
        <Card.Img variant="top" src={homeImage} width="1000" />
        <Card.ImgOverlay>
        <Card.Title>Ministère de l'éducation</Card.Title>
       <br/>
       
        <Card.Text>
        Bienvenue sur le site Web du ministère de
        l’Éducation. Ce site vous permet de 
        Consultez les actualités, consulter votre dossier d’aide financière 
        aux études et de faire une demande en ligne.
        <form style={buttonContainerStyle}>
            <div>
             <input type="image" src={identiImage} onclick="btnImage1Click()" width="220" height="120"></input>
            </div>
            <div>
              <input type="image" src={inscriImage} onclick="btnImage1Click()" width="220" height="120"></input>
            </div>
        </form>
        </Card.Text>
      </Card.ImgOverlay>
      </Card>
    <Row>
    <Col sm={8}>
        <h1>Les nouvelles</h1>
    <Card>
        <Card.Img variant="top" src={nouv1Image} />
        <Card.Body>
          <Card.Text>
          Québec révisera ses programmes de science et technologie au primaire et au secondaire
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src={nouv2Image} />
        <Card.Body>
          <Card.Text>
          NÉGOCIATION. La pression s’accentue sur le gouvernement Legault afin d’améliorer les conditions de travail du personnel de l’éducation. Plus de 750 personnes du milieu scolaire de la MRC de Drummond étaient présentes pour faire part de leur mécontentement lors d’une grande manifestation devant le Centre de services scolaire des Chênes.          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        {/*       https://ici.radio-canada.ca/nouvelle/1976418/reforme-projet-loi-education-quebec-drainville */}
        <Card.Img variant="top" src={nouv3Image} />
        <Card.Body>
          <Card.Text>
          Une réforme majeure en éducation au Québec attendue dès jeudi                </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={4}>
        <h1>Lien Important</h1>
        <Row>
        <Button variant="primary" size="lg">
        <BsFillFilePersonFill/>  Le Ministre
        </Button>
        </Row>
        <br/>
        <Row>
        <Button variant="primary" size="lg">
        <MdArticle/> Salle de presse
        </Button>
        </Row>
        <br/>
        <Row>
        <Button variant="primary" size="lg">
       <GiInjustice/>  Plaintes
        </Button>
        </Row>
    </Col>
    </Row>
    <Footer/>
</>
  );
};