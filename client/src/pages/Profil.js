import React, {useState} from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/Log/SignUpForm';
import SignInForm from "../components/Log/SignInForm";
import Navbar from '../components/Navbar';

const Profil = () => {
    
    const [membre, setMembre] = useState(false)

    return (
        <>
            <Header/>
            <Navbar/>
        <div className="log-container">
            <div className="choise">
            <button onClick={(e) => {setMembre(true)}}>Se connecter</button>
            <button onClick={(e) => {setMembre(false)}}>S'inscrire</button>
        </div>

            {
                membre ? <SignInForm/> : <SignUpForm />
            }
        </div>
        
            
        </>
    );
};

export default Profil;