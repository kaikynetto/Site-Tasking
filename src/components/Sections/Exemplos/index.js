import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import {
  ExemplosCard,
  ExemplosContainer,
  ExemplosDescription,
  ExemplosTitle,
  ExemplosWrapper,
  Heading,
  ExemplosName,
  ExemplosStars,
} from './ExemplosElements';
import { FiBriefcase, FiUsers } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { useRouter } from 'next/router';

export default function Exemplos() {
  const router = useRouter();
  const { profissao } = router.query;
  const profissionais = [
    {
      name: "Diego P",
      profilePic: "https://cf.workana.com/logos/2e/c6f01f3a8341d0b9fee4eef54adea8/166112.jpg",
      description: "Softwares sob medida",
      country: "Brasil",
      stars: 4,
      projectsFinished: 20
    },
    {
      name: "Fernanda S",
      profilePic: "https://cf.workana.com/logos/3a/a55216fbdb40879a91ecfe46fb76eb/app-icon2.jpg",
      description: "Desenvolvimento Especializado em Escalabilidade",
      country: "Brasil",
      stars: 5,
      projectsFinished: 50
    },
    {
      name: "Carlos R",
      profilePic: "https://cf.workana.com/logos/69/39b8aa98b64aedba5b7b6d1195585c/11825607_1215981328427801_4289958271511787732_n.jpg",
      description: "Desenvolvedor Full Stack",
      country: "Brasil",
      stars: 4.5,
      projectsFinished: 30
    },
  ];

  return (
    <>
      <ExemplosContainer>
        <Heading>{profissao}s que poderiam participar do seu projeto hoje</Heading>
        <ExemplosWrapper>
          {profissionais.map((item) => (
            <ExemplosCard key={item.name}>
              <img style={{ borderRadius: 15 }} src={item.profilePic} height={125} width={125} />
              <ExemplosName>{item.name}</ExemplosName>
              <ExemplosDescription>{item.description}</ExemplosDescription>
              <ExemplosStars>
                {Array.from({ length: Math.floor(item.stars) }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </ExemplosStars>
            </ExemplosCard>
          ))}
        </ExemplosWrapper>
      </ExemplosContainer>
    </>
  );
}
