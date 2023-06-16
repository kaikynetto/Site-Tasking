import React from 'react'
import { ComoContratarCard, ComoContratarContainer, ComoContratarDescription, ComoContratarTitle, ComoContratarWrapper, Heading } from './ComoContratarElements'
import { FiBriefcase, FiUsers } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';

export default function ComoContratar() {
  return (
    <>
        <ComoContratarContainer>
            <Heading>Como contratar na Tasking</Heading>
            <ComoContratarWrapper>
                <ComoContratarCard>
                    <MdOutlineDesignServices size={60}/>

                    <ComoContratarTitle>Forneça as informações chave sobre o seu projeto</ComoContratarTitle>
                    <ComoContratarDescription>Em poucos passos, descreva o que você precisa, publique e comece a receber propostas. Grátis e sem compromisso!</ComoContratarDescription>
                </ComoContratarCard>
                <ComoContratarCard>
                    <FiUsers size={60}/>
                    <ComoContratarTitle>Selecione perfis</ComoContratarTitle>
                    <ComoContratarDescription>Seu projeto merece os melhores freelancers. Receba propostas imediatamente, filtre por habilidades, qualificações e outros critérios, para escolher o profissional que mais se adapta ao seu projeto.</ComoContratarDescription>
                </ComoContratarCard>
                <ComoContratarCard onClick={() => console}>
                    <FiBriefcase size={60}/>
                    <ComoContratarTitle>Segurança e garantia</ComoContratarTitle>
                    <ComoContratarDescription>Contrate por projeto ou por horas. Faça o seu pagamento com confiança: seu depósito ficará guardado em garantia até que o freelancer entregue o trabalho combinado.</ComoContratarDescription>
                </ComoContratarCard>
            </ComoContratarWrapper>
        </ComoContratarContainer>
    </>
  )
}
