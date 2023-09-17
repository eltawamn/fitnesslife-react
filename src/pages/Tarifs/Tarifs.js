import React from 'react';
import './tarifs.scss';


const Tarifs = () => {
    return (
        <div>
            <div className="tarifs">
             <hr/>
            <h2>Trouves facilement l'abonnement qui te convient</h2>
            <hr/>
            <div className='suivi'>
            <p>Suivi sportif + nutrition</p>
            </div>
            <div className="pack">
                <div className="dix">
                    <div className="clair">3 mois</div>
                    <div className='prix'>180€</div>
                    <div className='soit'>Soit</div>
                    <div className='mois'> 60€/mois</div>
                </div>
                <div className="vingt">
                    <div className="clair2">6 mois</div>
                    <div className='prix'>360€</div>
                    <div className='soit'>Soit</div>
                    <div className='mois'> 60€/mois</div>
                </div>
            </div>
            <div className='suivi'>
            <p>Suivi sportif</p>
            </div>
            <div className="pack">
                <div className="dix">
                    <div className="clair">3 mois</div>
                    <div className='prix'>150€</div>
                    <div className='soit'>Soit</div>
                    <div className='mois'> 50€/mois</div>
                </div>
                <div className="vingt">
                    <div className="clair2">6 mois</div>
                    <div className='prix'>300€</div>
                    <div className='soit'>Soit</div>
                    <div className='mois'> 50€/mois</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Tarifs;