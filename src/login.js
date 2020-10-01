import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DivLoginAlpha, DivLoginBeta } from './styles';

function Login() {

  let history = useHistory();
  const enterLogin = "enter-login";
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    setEmail(email);
  }, [email])


  useEffect(() => {
    setPass(pass);
  }, [pass])

  function handleLogin(e) {
    e.preventDefault();
    //if (email && pass !== '') {
      history.push("/produtos");

    //}
   //toast.info("Preencha todos os campos para continuar!", {
     // toastId: enterLogin
    //});
  }

  return (
    <DivLoginAlpha >
      <DivLoginBeta >
        <img alt="logo" src='logo-nova-alianca.jpg' />
        <form onSubmit={handleLogin} >
          <input name="email" type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} />
          <input name="pass" type="password" placeholder="Senha" onClick={event => setPass(event.target.value)}  />
          <button style={{ backgroundColor: '#800000', color: "white", border: 0, borderRadius: 5, padding: 5 }} >Entrar</button>
        </form>
      </DivLoginBeta>
      <ToastContainer hideProgressBar={true} pauseOnHover style={{ width: 450 }} />
    </DivLoginAlpha>
  )
}

export default Login;