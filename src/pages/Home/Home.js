import React from 'react';
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
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque cursus urna pellentesque et dui at. Natoque cras dignissim venenatis proin mi quis. A ut quam tellus viverra eu maecenas sit diam. Tortor nulla sed faucibus montes ullamcorper. Pulvinar ullamcorper adipiscing lectus faucibus dictum tempor. Justo habitasse non eu tristique augue. Luctus viverra condimentum diam et nunc lacus convallis. Pellentesque ipsum id eleifend mattis amet. Habitasse proin egestas nam turpis tempus eget. </p>
                <div className='nom'>
                    <p>• Stella N</p>
                </div>
            </div>
            <div className='avis-deux'>
                <img src='/images/avis.png'/>
                <div className='duree'>
                <p>Il y a un mois</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque cursus urna pellentesque et dui at. Natoque cras dignissim venenatis proin mi quis. A ut quam tellus viverra eu maecenas sit diam. Tortor nulla sed faucibus montes ullamcorper. Pulvinar ullamcorper adipiscing lectus faucibus dictum tempor. Justo habitasse non eu tristique augue. Luctus viverra condimentum diam et nunc lacus convallis. Pellentesque ipsum id eleifend mattis amet. Habitasse proin egestas nam turpis tempus eget. </p>
                <div className='nom'>
                    <p>• Melissa b</p>
                </div>
            </div>
            <div className='avis-trois'>
                <img src='/images/avis.png'/>
                <div className='duree'>
                <p>Il y a un mois</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque cursus urna pellentesque et dui at. Natoque cras dignissim venenatis proin mi quis. A ut quam tellus viverra eu maecenas sit diam. Tortor nulla sed faucibus montes ullamcorper. Pulvinar ullamcorper adipiscing lectus faucibus dictum tempor. Justo habitasse non eu tristique augue. Luctus viverra condimentum diam et nunc lacus convallis. Pellentesque ipsum id eleifend mattis amet. Habitasse proin egestas nam turpis tempus eget. </p>
                <div className='nom'>
                    <p>• Francois F</p>
                </div>
            </div>
            </div>
            <div className='bouton'>
                <button>Rédigez un avis</button>
            </div>
        </div>
    )
}

export default Home;