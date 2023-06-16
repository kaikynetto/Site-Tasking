import React from 'react';
import Link from 'next/link';
import { Card, CardsWrapper, Column1, Column2, EncontreContainer, EncontreRow, EncontreWrapper, Heading, Heading2, HeroContainer, HeroRow, HeroWrapper, ImgWrap, Subtitle, TextWrapper, TitleSection } from './EncontreProfissionaisElements';
import img from '../../../../public/imgs/heroImage.png';
import Image from 'next/image';

export default function Encontre() {
  const professions = ['Designer', 'Programador', 'UI Writer', 'UX Writer', 'Contador', 'Tradutor'];

  return (
    <EncontreContainer>
      <EncontreWrapper>
        <EncontreRow>
          <Column1>
            <TextWrapper>
              <TitleSection>Tasking</TitleSection>
              <Heading>Encontre os profissionais que quiser</Heading>
              {/* <Subtitle></Subtitle> */}
            </TextWrapper>
          </Column1>
          <Column2>
            <Heading2>Sugestão de profissionais</Heading2>
            <CardsWrapper>
              {professions.map((profession) => (
                <Link href={`/encontre?profissao=${encodeURIComponent(profession)}`} key={profession}>
                  <Card>{profession}</Card>
                </Link>
              ))}
            </CardsWrapper>
          </Column2>
        </EncontreRow>
      </EncontreWrapper>
    </EncontreContainer>
  );
}

