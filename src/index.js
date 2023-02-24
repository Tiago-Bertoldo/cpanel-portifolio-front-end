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
import Error from './Pages/Error'
import LoginHomePage from './Pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
              <Route path='/' element={<LoginHomePage/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/projet' element={<Projet/>}/>
              <Route path='*' element={<Error/>}>
            </Route>
          </Routes>
    </Router>
  </React.StrictMode>
);
