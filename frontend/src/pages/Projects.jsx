import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";
import AOS from "aos";

export default function Projects() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  const projectList = [
    { title: "Freelance Marketplace", description: "MERN stack freelance platform.", img:"https://via.placeholder.com/300", link:"#"},
    { title: "Portfolio Website", description: "My personal portfolio.", img:"https://via.placeholder.com/300", link:"#"},
    { title: "Weather App", description: "Real-time weather app.", img:"https://via.placeholder.com/300", link:"#"},
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center" data-aos="fade-up">Projects</h2>
      <Row className="justify-content-center">
        {projectList.map((p,i)=><ProjectCard key={i} {...p} />)}
      </Row>
    </Container>
  );
}
