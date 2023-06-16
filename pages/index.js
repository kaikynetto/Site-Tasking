import React, { useState } from 'react'
import Sidebar from '../src/components/Sidebar';
import Navbar from '../src/components/Navbar';
import HeroSection from '../src/components/Sections/Hero';
import YourTalent from '../src/components/Sections/YourTalent';
import Encontre from '../src/components/Sections/EncontreProfissionais';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      <YourTalent/>
      <Encontre/>
    </>
  )
}
