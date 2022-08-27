import React, {useState} from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/Log/SignUpForm';
import SignInForm from "../components/Log/SignInForm";
import Navbar from '../components/Navbar';
import { QueryClient, useQuery } from 'react-query';
import CardProfil from '../components/CardProfil';

const Profil = () => {
    
    const [membre, setMembre] = useState(false)
    const queryKey = ["token"]
    const { isLoading, data } = useQuery(queryKey)

    return (
        <>
        {
            isLoading ? (<div>IS LOADING</div>) :
            (
            <>
                <Header/>
                <Navbar/>
                {
                    data ? (<CardProfil/>) : (
                    
                    <div className="log-container">
                        <div className="choise">
                        <button onClick={(e) => {setMembre(true)}}>Se connecter</button>
                        <button onClick={(e) => {setMembre(false)}}>S'inscrire</button>
                    </div>

                        {
                            membre ? <SignInForm/> : <SignUpForm />
                        }
                    </div>
                    )
                }
            </>
            )
        }
            
        </>
    );
};

export default Profil;