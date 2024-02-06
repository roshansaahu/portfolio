import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Expertice from './components/Expertice';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Header />
       <Banner />
       <About />
       <Services />
       <Expertice />
       <Footer />
     </>
  );
}

export default App;
