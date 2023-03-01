import './Styles/responsive.scss';
import './Styles/desktop.scss';
import { useState } from 'react';
import { loginUser } from '../../fetchAPI';
import { useNavigate } from 'react-router-dom';
import {infoProjet} from '../bd_json/index'


export default function LoginHomePage({lregister}) {
  const navigate = useNavigate();
  const [projetActive , setProjetActive] = useState(true);
  const [userRegister , setUserRegister ] = useState(lregister)
  const [userParametres , setUserParametres] = useState({
    login : '',
    password : '',
    email : ''
  })

  const getProjetLength = infoProjet.length;

  

  //Validate login
  const handleValidateLogin = (e) => {
      e.preventDefault()
    if(loginUser.login === userParametres.login && loginUser.password === userParametres.password) {
        if(getProjetLength === 0){
          navigate('/projet')
        }else {
          navigate('/dashboard')
        }
    } else {
      let errorMsg = document.querySelector('.msg-error')
      errorMsg.innerHTML = 'Votre identifiant ou votre mot de passe est incorrect.'
    }
    
  }

  //Register User
  const handleRegisterUser = (e) =>{
    e.preventDefault();
    let errorLogin = document.querySelector('.login')
    let errorEmail = document.querySelector('.email')
    if(loginUser.login === userParametres.login) {
      errorLogin.innerHTML = 'Nom deja utilize voulez choisir un nouveau nom'
    }else {
      errorLogin.innerHTML = ' '
    }
    if(loginUser.email === userParametres.email){
      errorEmail.innerHTML = 'Email deja utilize voulez choisir un nouveau email '
    }else {
      errorEmail.innerHTML = ' '
    }

  }

  return ( userRegister ? 
    <section id="homepage">
        <section className="login-container">
          <div className="login-container__form">
            <form action="" onSubmit={(e) => handleRegisterUser(e)}>
                <h1>Enregistrer</h1>
                <label htmlFor="nom">Login : </label>
                <input type="text" name="login" id="login"  className='input-style-login'
                onChange={(e) => setUserParametres((prevState) => ({
                  ...prevState, login:e.target.value
                }))}
                />
                <span className='msg-error login'></span>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" className='input-style-login' 
                onChange={(e) => setUserParametres((prevState)=> ({
                  ...prevState, email:e.target.value
                }))}/>
                <span className='msg-error email'></span>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" className='input-style-login' 
                onChange={(e) => setUserParametres((prevState)=> ({
                  ...prevState, password:e.target.value
                }))}/>
                <button>  Register   </button>
              </form>
          </div>
            
        </section>
    </section> 
    : (
    <section id="homepage">
    <section className="login-container">
      <div className="login-container__form">
        <form action="" onSubmit={(e) => handleValidateLogin(e)}>
            <h1>Login</h1>
            <label htmlFor="nom">Login : </label>
            <input type="text" name="login" id="login"  className='input-style-login'
            onChange={(e) => setUserParametres((prevState) => ({
              ...prevState, login:e.target.value
            }))}
            />
            <span className='msg-error'></span>
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" className='input-style-login' 
            onChange={(e) => setUserParametres((prevState)=> ({
              ...prevState, password:e.target.value
            }))}/>
            <span className='msg-error'></span>
            <button>  Login   </button>
            <span className='registrer-style' onClick={()=> setUserRegister(true)}>Enregistrer...</span>
          </form>
      </div>
        
    </section>
</section>)
  );
}
