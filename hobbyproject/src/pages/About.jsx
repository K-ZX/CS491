import { ListGroup } from 'react-bootstrap'

export default function About() {
  return (
    <>
      <h2>About Me</h2>
      <ListGroup className="mb-3">
        <ListGroup.Item>Name: Omar Alcantar</ListGroup.Item>
        <ListGroup.Item>Course: CS491</ListGroup.Item>
        <ListGroup.Item>Stack: React, Vite, Router, React-Bootstrap</ListGroup.Item>
      </ListGroup>
      <p>
        This app practices routing (Home / Hobbies / About), dynamic routes for
        hobby details, and Bootstrap components for layout.
      </p>
    </>
  )
}
