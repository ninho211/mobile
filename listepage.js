import React from 'react';
import img1 from './img/chien4.jpg';
import img2 from './img/chien1.jpg';
import img3 from './img/chien2.jpg';
import img4 from './img/chien3.jpg';

function Listepage() {
    return (
      <div className="card-container">
        <div className="card">
        <img src={img1} ></img>
          <h3>Joyce</h3>
          <p> Joyce est une chienne douce et aimante, à la recherche d'un foyer chaleureux où elle pourra déployer tout son amour. Son regard tendre et sa queue qui remue sans cesse témoignent de sa joie de vivre malgré son passé difficile. Adopter Joyce, c'est accueillir une compagne fidèle qui saura illuminer vos journées de bonheur inconditionnel. </p>
        </div>
  
        <div className="card">
        <img src={img2} ></img>
          <h3>Max</h3>
          <p> Avec ses yeux pétillants et sa queue qui remue frénétiquement à la vue d'une balle, Max est un véritable amoureux du jeu. Ce jeune chien déborde d'énergie et de vitalité, mais il cherche surtout quelqu'un avec qui partager ses moments de complicité. Adopter Max, c'est s'offrir un compagnon joueur et dévoué pour des aventures inoubliables. </p>
        </div>
  
        <div className="card">
        <img src={img3} ></img>
          <h3>Luna</h3>
          <p>Luna est une belle chienne au pelage soyeux et au regard doux, mais ne vous fiez pas à sa taille imposante, car sous ses airs majestueux se cache un cœur tendre et protecteur. Toujours prête à veiller sur ses proches, Luna cherche une famille aimante qui saura apprécier sa loyauté sans faille. Adopter Luna, c'est accueillir une protectrice douce et dévouée dans votre foyer.</p>
        </div>
  
        <div className="card">
        <img src={img4} ></img>
          <h3>Charlie</h3>
          <p>Avec son museau curieux et sa démarche enjouée, Charlie est un véritable explorateur dans l'âme. Rien ne lui fait plus plaisir que de partir à la découverte de nouveaux horizons, que ce soit lors de longues balades en forêt ou de simples promenades dans le quartier. Adopter Charlie, c'est offrir à un joyeux compagnon la chance de vivre chaque jour comme une aventure à partager ensemble.</p>
        </div>
      </div>
    );
  }
  
  export default Listepage;
