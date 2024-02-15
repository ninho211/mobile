import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Accueil from './acceuil';
import Formulaire from './formulaire';
import Listepage from './listepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function fonction1() {
  return (

 
<Router>
 
<header testo="Sara"/>
<Nav/>
 
<Routes>
  <Route path="acceuil" element={<Accueil/>}/>
  <Route path="Formulaire" element={<Formulaire/>}/>
  <Route path="listepage" element={<Listepage/>}/>
 
</Routes>
</Router>
 
  );
}
 
export default fonction1;