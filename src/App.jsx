import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './assets/css/style.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import AOS from 'aos';
// import Loading from './components/Loading/Loading';

function App() {
  return (
    <Container>
      <Header />
      {/* <Loading /> */}
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
