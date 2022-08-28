import Card from 'react-bootstrap/Card';
import imageWelcomeCard from "../assets/WelcomeCard.png"

function WelcomeCard() {
  return (
    <Card className="text-white w-90 p-1 bg-transparent">
      <Card.Img src={imageWelcomeCard} alt="Card image" /> 
      <Card.ImgOverlay>
        <Card.Title>Bienvenidx</Card.Title>
        <Card.Text className="w-50">
          Concluciones y estadisticas de nuestra pagina web
        </Card.Text>
        <Card.Text>Actualizado 08-2022</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default WelcomeCard;