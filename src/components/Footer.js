import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import {Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Nav.Link className="LOGO" href="#home">
              DJ Bone
            </Nav.Link>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
              <a
                href="mailto:F111110111@nkust.edu.tw"
                target="_blank"
                title="Email"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              
              <a
                href="https://github.com/jake0627a1"
                target="_blank"
                title="GitHub"
                rel="noreferrer"
              >
                <img src={navIcon4} alt="" />
              </a>
              <a
                href="https://testnets.opensea.io/"
                target="_blank"
                title="Opensea"
                rel="noreferrer"
              >
                <img src={navIcon5} alt="" />
              </a>
              
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}
