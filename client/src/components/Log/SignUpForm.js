import React, { useState } from 'react';
import axios from "axios"
import SignInForm from './SignInForm';
require("dotenv").config();

const SignUpForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [submitForm, setSubmitForm] = useState(false)

    const handleForm = async (e) => {
        e.preventDefault();

        const nameError = document.querySelector(".name.Error")
        const emailError  = document.querySelector(".email.Error")
        const passError   = document.querySelector(".pass.Error")
        const confirmError = document.querySelector(".confirm.Error")

        confirmError.innerHTML = ""

        if(password !== confirm){
          confirmError.innerHTML = "Les mot de passe ne corrspondent pas !"
        }else{
          await axios({
          method: "post",
          url: `http://localhost:5000/api/user/register`,
          data: {
            name,
            email,
            password,
          },
        })
        .then((res) => {
            console.log(res);
            if (res.data.err){
              if (res.data.err.errors.name) {
                nameError.innerHTML = res.data.err.errors.name.message
              }else if (res.data.err.errors.email){
                emailError.innerHTML = res.data.err.errors.email.message
              }else{
                passError.innerHTML = res.data.err.errors.password.message
              }      
              
            }else{
              setSubmitForm(true)
            }
            
        })
        .catch((err) => {
            console.log(err)
        })
        }

        
    }

    return (
      <>
      {
        submitForm ? <SignInForm/> : (
        <form action="" onSubmit={handleForm} id="sign-up-form">
          <label htmlFor="name">Nom</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <div className="name Error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <div className='email Error'></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div className="pass Error"></div>
          <br />
          <label htmlFor="confirm-password">Confirmez le mot de passe</label>
          <br />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
            value={confirm}
          />
          <div className="confirm Error"></div>
          <br />
          <input type="submit" value="Valider inscription" className='submit'/>
        </form>
        )
      }
      </>
    );
};

export default SignUpForm;