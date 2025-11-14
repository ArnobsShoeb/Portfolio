import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function NavigationBar() {
  const location = useLocation(); // get current route path

  // Function to convert path to page name
  const getPageName = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/resume":
        return "Resume";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };

  const currentPage = getPageName(location.pathname);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <div className="head">
          {currentPage}
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
