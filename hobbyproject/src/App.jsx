import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'
import HobbyDetail from './pages/HobbyDetail'
import About from './pages/About'

export default function App() {
  return (
    <>
      <NavBar />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hobbies/:id" element={<HobbyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p className="text-center">Not Found</p>} />
        </Routes>
      </Container>
    </>
  )
}
