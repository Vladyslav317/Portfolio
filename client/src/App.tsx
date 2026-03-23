import { useEffect, useState } from 'react';

import Homepage from './components/Homepage';
import About from './components/About';
import ParticlesBackground from './components/ParticlesBackground';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');

    const root = document.documentElement;

    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className='relative z-10'>
      <ParticlesBackground dark={dark} />
      <Nav dark={dark} setDark={setDark} />
      <Homepage />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
