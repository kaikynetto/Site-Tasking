import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import Contrate from '../src/components/Sections/Contrate';
import ComoContratar from '../src/components/Sections/ComoContratar';
import Exemplos from '../src/components/Sections/Exemplos';

export default function Encontre() {
  const router = useRouter();
  const { profissao } = router.query;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <Contrate/>
      <ComoContratar/>
      <Exemplos/>
    </>
  );
}
