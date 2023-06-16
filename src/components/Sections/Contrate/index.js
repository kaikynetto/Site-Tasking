import React from 'react';
import { Column1, Column2, Heading, ContrateContainer, ContrateRow, ContrateWrapper, ImgWrap, Subtitle, TextWrapper, HeadingFont, Button } from './ContrateElements';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';

import talentImage from '../../../../public/imgs/talentImage.png';

export default function Contrate() {
  const router = useRouter();
  const { profissao } = router.query;
  return (
    <ContrateContainer>
      <ContrateWrapper>
        <ContrateRow>
          <Column1>
            <TextWrapper>
              <Heading>Contrate {profissao}s Freelancers com as habilidades exatas em poucos minutos</Heading>
              <Subtitle>Encontre o {profissao} que você precisa na Tasking. Publique seu projeto e contrate profissionais capacitados imediatamente.</Subtitle>
              <Button onClick={() => router.push("/signup")}>Procurar {profissao}s</Button>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Image src={talentImage} alt="Talent Image" />
            </ImgWrap>
          </Column2>
        </ContrateRow>
      </ContrateWrapper>
    </ContrateContainer>
  );
}
