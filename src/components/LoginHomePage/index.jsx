import './Styles/responsive.scss';
import './Styles/desktop.scss';
import { useState } from 'react';
export default function LoginHomePage() {


  const [userParametres , setUserParametres] = useState({
    nom : '',
    password : ''
  })



  return (
    <section id="homepage">
        <section className="login-container">
          <div className="login-container__form">
            <form action="">
                <h1>Cpanel</h1>
                <label htmlFor="nom">Login : </label>
                <input type="text" name="login" id="login"  className='input-style-login'
                onChange={(e) => setUserParametres({nom : e.target.value})}
                />
                <span className='msg-error'></span>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" className='input-style-login' 
                onChange={(e) => setUserParametres({password : e.target.value})}/>
                <span className='msg-error'></span>
                <button>  Login   </button>
              </form>
          </div>
            
        </section>
    </section>
  );
}
