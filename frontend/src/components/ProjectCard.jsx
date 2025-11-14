import { Card, Button } from "react-bootstrap";

export default function ProjectCard({ title, description, img, link }) {
  return (
    <Card className="shadow-sm m-3 project-card" data-aos="fade-up">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank">View</Button>
      </Card.Body>
    </Card>
  );
}
