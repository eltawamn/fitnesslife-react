import React from 'react';
import './concept.scss'


const Concept = () => {
    return (
        <div>
        <div className='concept'>
            Notre concept
        </div>
        <div className='titre'>
        Un coaching qui vous ressemble
        </div>
        <div className='parent'>
        <div className='explication'>
        Un site web réunissant trois coachs sportifs compétents, spécialisés dans le yoga, la musculation, le pilates et la nutrition, offre une opportunité exceptionnelle pour ceux qui recherchent une approche holistique de leur bien-être physique. Ce concept unique allie expertise diversifiée et personnalisation pour répondre aux besoins variés des clients.
        Le yoga, avec son accent sur la méditation et la flexibilité, apporte équilibre et tranquillité d'esprit. Les cours de musculation, axés sur la force et l'endurance, permettent de sculpter le corps. Le pilates, centré sur le renforcement du noyau, améliore la posture et la stabilité. Enfin, la nutrition, sous la tutelle d'un expert, complète l'ensemble en enseignant l'importance d'une alimentation équilibrée pour atteindre des objectifs de santé et de remise en forme.
        </div>
        <div className='barre'>
            <img src='/images/barre.png'/>
        </div>
        </div>
        <div className='titre'>
        Une équipe qualifié
        </div>
        <div className='parent'>
        <div className='explication'>
        Chacun de ces coachs personnalise son approche en fonction des besoins et des objectifs individuels. Les utilisateurs ont accès à une variété de ressources, y compris des vidéos de cours en ligne, des plans d'entraînement, des séances de coaching en direct et des conseils nutritionnels. L'interaction avec ces coachs devient un véritable partenariat, permettant aux clients de progresser de manière significative tout en se sentant soutenus.
        </div>
        <div className='barre'>
            <img src='/images/equipe.png'/>
        </div>
        </div>
        </div>
    )
}

export default Concept;