import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import AOS from 'aos'

function App() {

  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

AOS.init({
  duration: 1000,
  once: true,
})



export default App
