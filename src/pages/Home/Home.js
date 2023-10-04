import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';



const Home = () => {
    return (
        <div>
            <h2>Nos services</h2>
            <hr></hr>
            <div className='logo'>
            <img src='/images/Pulse.png'/>
            <img src='/images/Dumbbell.png'/>
            <img src='/images/Pilates.png'/>
            </div>
            <div className='service'>
            <p>Cardio</p>
            <p>Musculation</p>
            <p>Pilates</p>
            </div>
            <div className='logos'>
            <img src='/images/eat.png'/>
            <img src='/images/Guru.png'/>
            </div>
            <div className='services'>
            <p>Nutrition</p>
            <p>Yoga</p>
            </div>
            <hr></hr>
            
            <h2>Avis</h2>
            <div className='avis'>
            <div className='avis-un'>
                <img src='/images/avis.png'/>
                <div className='duree'>
                <p>Il y a un mois</p>
                </div>
                <p>Ma collaboration avec John en tant que coach sportif a été phénoménale. En un an, il a métamorphosé ma vie. Dès le départ, John a compris mes objectifs personnels, ma condition physique, et mes préoccupations. Son programme d'entraînement sur mesure a produit des résultats remarquables. J'ai perdu du poids, gagné en énergie et en confiance en moi. Sa passion pour la santé et la nutrition est contagieuse. John est plus qu'un coach ; il est un mentor, un motivateur exceptionnel. Toujours ponctuel, il donne 100 % à chaque séance. Je le recommande vivement à quiconque veut transformer sa vie grâce au fitness. </p>
                <div className='nom'>
                    <p>• Stella N</p>
                </div>
            </div>
            <div className='avis-deux'>
                <img src='/images/avis.png'/>
                <div className='duree'>
                <p>Il y a un mois</p>
                </div>
                <p>J'ai eu la chance de travailler avec le coach sportif Jason et je suis ravi de mon expérience. En quelques mois, il a transformé ma forme physique et ma santé de manière spectaculaire. Jason est plus qu'un coach, il est un mentor passionné par son métier. Ses séances d'entraînement sont variées, stimulantes et adaptées à mes besoins. Il m'a également apporté des conseils nutritionnels précieux. Sa personnalité positive et son soutien constant m'ont motivé à persévérer. Je le recommande vivement à quiconque souhaite atteindre ses objectifs de remise en forme et adopter un mode de vie plus sain </p>
                <div className='nom'>
                    <p>• Melissa b</p>
                </div>
            </div>
            <div className='avis-trois'>
                <img src='/images/avis.png'/>
                <div className='duree'>
                <p>Il y a un mois</p>
                </div>
                <p>Billy est un coach sportif exceptionnel ! En quelques mois, il a complètement transformé ma vie. Ses séances d'entraînement sont stimulantes et adaptées à mes objectifs personnels. Grâce à sa motivation constante, j'ai atteint des niveaux de forme physique que je n'aurais jamais imaginés. Sa passion pour la santé et la nutrition a également eu un impact énorme sur mes habitudes alimentaires. Billy est bien plus qu'un coach, il est un ami et un mentor qui m'a aidé à surmonter des obstacles physiques et mentaux. Je lui suis profondément reconnaissant pour tout ce qu'il a fait pour moi, et je le recommande chaudement à tous ceux qui recherchent une transformation positive dans leur vie. </p>
                <div className='nom'>
                    <p>• Francois F</p>
                </div>
            </div>
            </div>
            <div className='bouton'>
                <Link to= '/Avis'><button>Redigez un avis</button></Link>
            </div>
        </div>
    )
}

export default Home;