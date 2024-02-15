import React from 'react';
import { Link } from 'react-router-dom';
import img2 from './img2.jpg';

function Acceuil() {
    return (
        <>
            <img className="background-image" src={img2} alt="spa" />

            <div className="text-overlay">
                <h1>Bienvenue à la SPA</h1>
                <p>Partageons autant de bienfaits qu'ils nous apportent !</p>

                {/* Nouveau titre et texte */}
                <div className="additional-content">
                    <h2>Nos Services</h2>
                    <p>Découvrez nos services exceptionnels pour prendre soin de vos animaux de compagnie.</p>
                </div>
            </div>
        </>
    );
}

export default Acceuil;
