import React from 'react'
import { Column1, Column2, Heading, YourTalentContainer, YourTalentRow, YourTalentWrapper, ImgWrap, Subtitle, TextWrapper } from './YourTalentElements'
// import img from "../../../../public/imgs/YourTalentImage.png"
import Image from 'next/image'

export default function YourTalent() {
  return (
    <YourTalentContainer id="talent">
      <YourTalentWrapper>
        <YourTalentRow>
          <Column1>
            <Image src={require("../../../../public/imgs/talentImage.png")}/>
          </Column1>
          <Column2>
            <TextWrapper>
              <Heading>O talento é seu. <br/> Faça valer!</Heading>
              <Subtitle>A holding líder em tecnologia por trás do aplicativo Tasking conectando talentos ao sucesso.</Subtitle>
            </TextWrapper>
          </Column2>
        </YourTalentRow>
      </YourTalentWrapper>
    </YourTalentContainer>
  )
}