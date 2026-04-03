import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Appointment from './pages/Appointment';
import CustomDress from './pages/CustomDress';

// Placeholder Pages for remaining
const About = () => <div className="section container text-center" style={{paddingTop: '150px'}}><h1>Our Story</h1></div>;
const Contact = () => <div className="section container text-center" style={{paddingTop: '150px'}}><h1>Contact Us</h1></div>;

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/custom" element={<CustomDress />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
