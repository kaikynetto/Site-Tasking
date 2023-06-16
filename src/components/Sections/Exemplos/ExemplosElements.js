import styled from 'styled-components';

export const ExemplosContainer = styled.div`
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

export const ExemplosWrapper = styled.div`
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

export const ExemplosCard = styled.div`
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

export const ExemplosName = styled.p`
  font-size: 22px;
  margin-vertical: 20px;
  text-align: center;
`;

export const ExemplosDescription = styled.p`
  font-size: 18px;
  margin-top: 30px;
  text-align: center;
`;

export const ExemplosTitle = styled.p`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  margin-top: 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 50px;
`;

export const ExemplosStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  svg {
    color: gold;
    margin-right: 3px;
  }
`;
