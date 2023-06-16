import React, { useEffect, useState } from 'react';
import { Column1, Column2, ContinueBtn, ErrorText, Heading, Input, InputName, SignUpContainer, SignUpRow, SignUpWrapper } from './SignUpElements';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

const phrases = [
  'Encontre freelancers qualificados',
  'Realize projetos com facilidade',
  'Pagamentos seguros dentro da plataforma'
];

export default function SignUp() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [step, setStep] = useState("first");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const router = useRouter();
  const [error, setError] = useState("");

  const signUp = () => {
    axios({
      method: "POST",
      url: "http://localhost/artemis-api/tasking/signup.php",
      data: {
        email,
        password,
        surname,
        name,
        profilePic,
      }
    }).then((res) => {
      if(res.data.status === "OK!"){
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        router.push("/");
      } else if(res.data.error === "This email is already in use.") {
        setError("Esse email já está em uso");
        setStep("third");
      }
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <SignUpContainer>
        <SignUpWrapper>
          <SignUpRow>
            <Column1>
              <div>
                <Image width={150} height={150} src={require('../../public/imgs/logoInverse.svg')} />
                <Heading>{phrases[currentPhraseIndex]}</Heading>
              </div>
            </Column1>
            <Column2>
              {step === "first" ? (
                <>
                  <div style={{ width: '50%' }}>
                    <InputName>Vamos nos conhecer melhor, qual seu nome?</InputName>
                    <Input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Nome' />
                    <ContinueBtn onClick={() => {
                      if (name !== "") {
                        setStep("second");
                        setError("");
                      } else {
                        setError("Digite o seu nome!");
                      }
                    }}>Continuar</ContinueBtn>
                    <ErrorText>{error}</ErrorText>
                  </div>
                </>
              ) : step === "second" ? (
                <>
                  <div style={{ width: '50%' }}>
                    <InputName>E o seu sobrenome?</InputName>
                    <Input onChange={e => setSurname(e.target.value)} value={surname} type='text' placeholder='Sobrenome' />
                    <ContinueBtn onClick={() => {
                      if (surname) {
                        setStep("third");
                        setError("");
                      } else {
                        setError("Digite o seu sobrenome!");
                      }
                    }}>Continuar</ContinueBtn>
                    <ErrorText>{error}</ErrorText>
                  </div>
                </>
              ) : step === "third" ? (
                <>
                  <div style={{ width: '50%' }}>
                    <InputName>Qual seu email?</InputName>
                    <Input onChange={e => setEmail(e.target.value)} value={email} type='text' placeholder='Email' />
                    <ContinueBtn onClick={() => {
                      if (email.includes("@")) {
                        setStep("fourth");
                        setError("");
                      } else {
                        setError("Email inválido!");
                      }
                    }}>Continuar</ContinueBtn>
                    <ErrorText>{error}</ErrorText>
                  </div>
                </>
              ) : step === "fourth" ? (
                <>
                  <div style={{ width: '50%' }}>
                    <InputName>Qual sua foto de perfil?</InputName>
                    <Input type='file' accept="image/*" onChange={handleProfilePicChange} placeholder='Foto de perfil' />
                    <ContinueBtn onClick={() => {
                      if (profilePic !== "") {
                        setStep("fifth");
                        setError("");
                      } else {
                        setError("Selecione uma foto de perfil!");
                      }
                    }}>Continuar</ContinueBtn>
                    <ErrorText>{error}</ErrorText>
                  </div>
                </>
              ) : step === "fifth" ? (
                <>
                  <div style={{ width: '50%' }}>
                    <InputName>Digite uma senha</InputName>
                    <Input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Senha' />
                    <Input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} type='password' placeholder='Confirmação da Senha' />
                    <ContinueBtn onClick={() => {
                      if(password === confirmPassword) {
                        if(password.length > 3) {
                          signUp();
                        } else {
                          setError("Digite uma senha com mais de 3 caracteres")
                        }
                      } else {
                        setError("Senhas diferentes!");
                      }
                    }}>Continuar</ContinueBtn>
                    <ErrorText>{error}</ErrorText>
                  </div>
                </>
              ) : (
                <></>
              )}
            </Column2>
          </SignUpRow>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
}
