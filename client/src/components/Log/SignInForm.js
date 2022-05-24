import React, { useState } from 'react';
import axios from "axios"
const SignInForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = async (e) => {

        await axios({
            url : "http://localhost:5000/api/user/login",
            method : "get",
            data : {
                email,
                password
            },
        })
    }

    return (
        <>
            <form action="" onSubmit={handleForm} id="sign-in-form">
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name='email' onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" name="password" onChange={(e) => {setPassword(e.target.value)}} value={password} />
                <br />
                <br />
                <input type="submit" name='Envoyer' className='submit' />
            </form>
        </>
    );
};

export default SignInForm;