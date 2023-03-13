import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Projet from './Pages/Projet';
import Error from './Pages/Error/error404'
import LoginHomePage from './Pages/Home';
import Register from './Pages/Register';
import AuthLoginValid from './context/AuthLogin';
import AllProjets from './Pages/AlllProjets';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthLoginValid>
    <Router>
            <Routes>
              <Route path='/' element={<LoginHomePage/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path ='/allprojets/:idProjet' element={<AllProjets/>}/>
              <Route path='/projet' element={<Projet/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='*' element={<Error/>}>
            </Route>
          </Routes>
    </Router>
    </AuthLoginValid>
  </React.StrictMode>
);
