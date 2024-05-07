import { Col, Container, Image, Row } from "react-bootstrap";
import img from "./../assets/hangman.png";
import img2 from "./../assets/man.gif";

import img3 from "./../assets/crows.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container fluid className="vh-100 landing-container">
        <Row>
          <Col className="crow-col">
            <div className="">
              <Image className="crow-img" src={img3} fluid />
            </div>
            <div className="">
              <Image className="crow-img1" src={img3} fluid />
            </div>
            <div className="">
              <Image className="crow-img2" src={img3} fluid />
            </div>
            <div className="">
              <Image className="crow-img2" src={img3} fluid />
            </div>
          </Col>

          <Col
            xs={5}
            className="d-flex align-items-center justify-content-center text-center"
          >
            <div className="header-title text-center">
              <h1 className="glitch">
                <span className="bend">HANG</span>
                <br />
                MAN
              </h1>
            </div>
           
          </Col>
          <Col xs={2} className="d-flex align-items-center justify-content-center"> <div className="text-center">
              <h3 className="slogan mb-4">Guess the word, save the Man!</h3>
              <Link to="/game" className="game-link">
                START GAME
              </Link>
            </div></Col>
          <Col
            xs={5}
            className="d-flex align-items-start justify-content-end mt-5"
          >
            <Image className="hangman-img" fluid src={img} />
          </Col>
          <Col xs={12} className="running-container">
            <Image className="running-man" fluid src={img2} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
