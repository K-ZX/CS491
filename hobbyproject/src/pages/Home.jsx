import { Card } from 'react-bootstrap'

export default function Home() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title as="h1">Welcome Home</Card.Title>
        <Card.Text>React Router + React-Bootstrap practice project.</Card.Text>
        <img
          src="https://picsum.photos/seed/home/800/350"
          alt="welcome"
          className="img-fluid rounded"
        />
      </Card.Body>
    </Card>
  )
}
