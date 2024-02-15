import { Link } from "react-router-dom";
import image from'./logo.png';
function Nav() {
    return <>
    
    <nav>
        <ul>
         <li> <Link to="Acceuil">Acceuil</Link> </li>
        <li><Link to="Formulaire">Formulaire</Link> </li>
        <li> <Link to="listepage">Liste</Link> </li>

        </ul>
        <img  className="logo-img"src = {image} alt='img' />
      </nav>
    
     </>;
}
 
export default Nav;