import styled from 'styled-components';

export const ComoContratarContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 80vh;
  }
`;

export const ComoContratarWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 60px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ComoContratarCard = styled.div`

`;

export const ComoContratarTitle = styled.p`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  margin-top: 20px;
`;

export const ComoContratarDescription = styled.p`
  font-size: 18px;
  margin-top: 10px;
  opacity: 0.85;
`;

export const Heading = styled.h1`
  margin-bottom: 50px;
`;