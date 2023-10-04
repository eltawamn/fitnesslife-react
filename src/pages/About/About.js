import React from 'react';
import './About.scss'


const About = () => {
    return (
        <div>
            <h2>Qui sommes-nous ?</h2>
            <img src="/images/logo.png" alt="logo" />
            <hr/>
            <br />
            <div className='texte'>
            <p> 
            Bienvenue sur notre site, votre destination pour une transformation physique et mentale complète, guidée par trois coachs sportifs passionnés et dévoués. Nous sommes une équipe de professionnels du fitness, unis par une vision commune : vous aider à atteindre vos objectifs de santé et de bien-être.
            <p>
            <br />
            <h2>Notre Équipe</h2>
            <br />
            </p>
            <ul>
            <li>Sophie - Votre Expert en Yoga : Sophie est une yogi expérimentée avec une profonde compréhension de la méditation et de la flexibilité. Elle vous guidera à travers des séances apaisantes qui équilibrent le corps et l'esprit, vous aidant à trouver la paix intérieure et la sérénité.</li>
            <br/>

            <li>Maxime - Votre Spécialiste de la Musculation : Maxime est un adepte de la musculation, passionné par la force et l'endurance. Il conçoit des programmes de formation personnalisés pour vous aider à développer une musculature puissante et à atteindre vos objectifs de renforcement.</li>
            <br/>
            <li>Léa - Votre Experte en Pilates et Nutrition : Léa est notre experte en pilates, axée sur le renforcement du noyau et l'amélioration de la posture. Elle vous enseignera les bases de la stabilité et de la flexibilité. De plus, Léa vous donnera des conseils nutritionnels pour optimiser vos résultats.</li>
            
            </ul>
            <br/>
            <h2>Notre Mission</h2>
            <br/>

            Notre mission est de vous accompagner à chaque étape de votre parcours de fitness. Que vous soyez débutant ou que vous souhaitiez perfectionner votre pratique, notre équipe vous fournira des ressources, des séances en ligne, et des séances de coaching en direct pour vous aider à atteindre vos objectifs de manière efficace et durable.

            Chez nous, il ne s'agit pas seulement de transformer votre apparence physique, mais aussi de vous aider à renforcer votre confiance en vous, à améliorer votre santé globale et à adopter un mode de vie plus équilibré.

            Nous sommes ravis de faire partie de votre voyage vers une vie plus saine et plus épanouissante. Rejoignez-nous dès aujourd'hui et découvrez la différence que notre équipe de coachs sportifs passionnés peut apporter à votre vie.
            </p>
            <br />
            </div>
            <div className="team">
            <img src="/images/team.png" alt="logo" />
            </div>
        </div>
    )
}

export default About;