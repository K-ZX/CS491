import { useParams, Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { hobbies } from '../data/hobbies'

export default function HobbyDetail() {
  const { id } = useParams()
  const hobby = hobbies.find(h => h.id === id)

  if (!hobby) return <p>Hobby not found.</p>

  return (
    <Card>
      <Card.Img variant="top" src={hobby.img} alt={hobby.title} />
      <Card.Body>
        <Card.Title as="h2">{hobby.title}</Card.Title>
        <Card.Text>{hobby.details}</Card.Text>
        <Button as={Link} to="/hobbies">← Back to Hobbies</Button>
      </Card.Body>
    </Card>
  )
}
