import { useRouter } from 'next/router';
import React from 'react'

export default function Home() {

  const router = useRouter();
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <div>
            <h1>Bem vindo a Tasking!</h1>
            <p onClick={() => {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                router.push("/");
            }} style={{cursor: 'pointer', marginTop: 30, fontSize: 22, textAlign: 'center'}}>SAIR</p>
        </div>
    </div>
  )
}
