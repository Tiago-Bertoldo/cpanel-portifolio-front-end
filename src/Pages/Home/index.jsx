import './Styles/responsive.scss';
import './Styles/desktop.scss';
import { useState } from 'react';
import { loginUser } from '../../fetchAPI';
import { useNavigate  } from 'react-router-dom';



export default function LoginHomePage() {
  const navigate = useNavigate();
  const [projetActive , setProjetActive] = useState(true);
  const [userParametres , setUserParametres] = useState({
    login : '',
    password : ''
  })

  //Validate login
  const handleValidateLogin = (e) =>{
      e.preventDefault()
    if(loginUser.login === userParametres.login && loginUser.password === userParametres.password) {
      projetActive ? navigate("/dashboard") : navigate("/projet");
    } else {
      console.log('Offiline')
    }
    
  }



  return (
    <section id="homepage">
        <section className="login-container">
          <div className="login-container__form">
            <form action="" onSubmit={(e) =>handleValidateLogin(e)}>
                <h1>Cpanel</h1>
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
              </form>
          </div>
            
        </section>
    </section>
  );
}
