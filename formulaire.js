import { Link } from "react-router-dom";
import image from'./logo.png';
function Formulaire() {

     
return (
    <div className="styled-form">
      <h2>Formulaire :</h2>
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
        />
 
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
        />
 
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
        />
 
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
    
        ></textarea>
 
        <button type="submit" className="orange-button">
          Envoyer
        </button>
      
    </div>
  );
}
 
export default Formulaire;
    