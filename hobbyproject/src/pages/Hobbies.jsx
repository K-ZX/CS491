import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { hobbies } from '../data/hobbies'

export default function Hobbies() {
  return (
    <>
      <h2 className="mb-3">Hobbies</h2>
      <Row xs={1} md={2} lg={2} className="g-4">
        {hobbies.map(h => (
          <Col key={h.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={h.img} alt={h.title} />
              <Card.Body>
                <Card.Title>{h.title}</Card.Title>
                <Card.Text>{h.blurb}</Card.Text>
                <Link to={`/hobbies/${h.id}`}>See more →</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
