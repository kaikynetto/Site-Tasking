import styled from "styled-components";
import {Link as LinkS} from "react-scroll"

export const SignUpContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0px;
    // margin-bottom: 35vh;
  }
`;

export const SignUpWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const SignUpRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: var(--primary-color);
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  align-items:center;
  justify-content: center;
  align-content: center;
  text-align: center;
  display: flex;
  grid-area: col2;
`;

export const Heading = styled.p`
  color: var(--secondary-color);
  margin-top: 20px;
  font-size: 26px;
`;

export const Input = styled.input`
  padding: 10px 10px;
  background: transparent;
  border: 1px solid white;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 20px;
  ::placeholder {
    color: white;
  }
`;

export const InputName = styled.p`
  font-size: 22px;
`;

export const ContinueBtn = styled.button`
  width: 100%;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  padding: 10px 30px;
  margin-top: 10px;
  color: var(--secondary-color);
  border: none;
  text-transform: uppercase;
  font-size: 18px;

  &:hover{
    cursor: pointer;
    border: 1px solid white;
    background: transparent;
    color: white;
  }
`;

export const ErrorText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
`;