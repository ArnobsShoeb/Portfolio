import { useEffect } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import AOS from "aos";
import '../styles/About.css';
import profilePic from "../assets/images/IMG_8622.jpg";


export default function About() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center" data-aos="fade-up">About Me</h2>
      <Row className="align-items-center">
        <Col md={6} data-aos="fade-right">
          <img src={profilePic} alt="My Profile" className="img-fluid rounded shadow" />

        </Col>
        <Col md={6} data-aos="fade-left">
          <p>I’m a passionate MERN developer building responsive and modern web apps.</p>
          <h5>Skills</h5>
          <ProgressBar now={90} label="React" className="mb-2"/>
          <ProgressBar now={85} label="Node.js" className="mb-2"/>
          <ProgressBar now={80} label="MongoDB" className="mb-2"/>
          <ProgressBar now={75} label="JavaScript" className="mb-2"/>
        </Col>
      </Row>
    </Container>
  );
}
