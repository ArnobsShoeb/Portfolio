import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faNetworkWired, faShieldAlt, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram as faInstagramBrand } from '@fortawesome/free-brands-svg-icons';
import AOS from "aos";
import '../styles/About.css';
import profilePic from "../assets/images/IMG_8622.jpg";
import ic5 from "../assets/images/ic5.jpg";
import soccerbot from "../assets/images/soccerbot.jpg";
import urc from "../assets/images/urc.jpg";

export default function About() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  const hobbies = [
    { name: "Competitive Programming", icon: faCode, description: "Solving algorithmic challenges on platforms like Codeforces" },
    { name: "Network Engineering", icon: faNetworkWired, description: "Designing and troubleshooting network infrastructures" },
    { name: "Cybersecurity Research", icon: faShieldAlt, description: "Exploring vulnerabilities and security best practices" },
    { name: "Robotics", icon: faRobot, description: "Building and programming autonomous robots" }
  ];

  const photos = [
    { src: ic5, alt: "IC5 Competition", caption: "1st Position at University Innovation Hub Programme 2025" },
    { src: soccerbot, alt: "SoccerBot", caption: "Robotics Competition Achievement" },
    { src: urc, alt: "URC", caption: "University Rover Challenge Finalist" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-about py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0" data-aos="fade-right">
              <div className="profile-container">
                <img src={profilePic} alt="Shoeb Mahfuz" className="profile-img-large rounded-circle shadow" />
                <div className="social-links mt-3">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    href="https://www.facebook.com/arnob.shoeb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="me-1" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    href="https://www.instagram.com/gratified_killer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagramBrand} className="me-1" />
                    Instagram
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={8} data-aos="fade-left">
              <h1 className="display-4 fw-bold mb-3">About Me</h1>
              <p className="lead mb-4">
                Hi, I'm <strong>Shoeb Mahfuz</strong>, a passionate Network and Cybersecurity Enthusiast
                with a strong foundation in software development. Currently pursuing my Masters in
                Information and Cyber Security at the University of Dhaka, I combine technical expertise
                with innovative problem-solving to create secure and efficient digital solutions.
              </p>
              <p className="mb-4">
                My journey spans from competitive programming and robotics competitions to enterprise-level
                network infrastructure management. I believe in continuous learning and applying cutting-edge
                technologies to solve real-world challenges in cybersecurity and network engineering.
              </p>
              <div className="quick-stats">
                <div className="stat-item">
                  <h4 className="text-primary">1</h4>
                  <p>years of experience</p>
                </div>
                <div className="stat-item">
                  <h4 className="text-success">15+</h4>
                  <p>projects</p>
                </div>
                <div className="stat-item">
                  <h4 className="text-warning">5</h4>
                  <p>Certification</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hobbies Section */}
      <section className="hobbies-section py-5">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">Interests & Hobbies</h2>
          <Row>
            {hobbies.map((hobby, index) => (
              <Col md={6} lg={3} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                <Card className="hobby-card text-center h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="hobby-icon mb-3">
                      <FontAwesomeIcon icon={hobby.icon} size="2x" className="text-primary" />
                    </div>
                    <Card.Title className="h5">{hobby.name}</Card.Title>
                    <Card.Text className="flex-grow-1">{hobby.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Photo Gallery Section */}
      <section className="gallery-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">Achievement Gallery</h2>
          <Row>
            {photos.map((photo, index) => (
              <Col md={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
                <Card className="gallery-card shadow-sm">
                  <div className="gallery-img-container">
                    <img src={photo.src} alt={photo.alt} className="gallery-img" />
                  </div>
                  <Card.Body>
                    <Card.Text className="text-center">{photo.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Connect Section */}
      <section className="connect-section py-5">
        <Container className="text-center">
          <h2 className="mb-4" data-aos="fade-up">Let's Connect</h2>
          <p className="lead mb-4" data-aos="fade-up">
            I'm always interested in discussing new opportunities, sharing knowledge,
            or collaborating on exciting projects in cybersecurity and network engineering.
          </p>
          <div className="social-buttons" data-aos="fade-up">
            <Button
              variant="primary"
              size="lg"
              className="me-3"
              href="https://www.facebook.com/arnob.shoeb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="me-2" />
              Follow on Facebook
            </Button>
            <Button
              variant="danger"
              size="lg"
              href="https://www.instagram.com/gratified_killer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramBrand} className="me-2" />
              Follow on Instagram
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
