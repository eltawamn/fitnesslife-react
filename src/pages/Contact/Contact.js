import React from 'react';
import './contact.scss'


const Contact = () => {
    return (
        <div>
            <h2>CONTACTEZ NOUS</h2>
            <p>Nous sommes disponibles du lundi au samedi de 10h à 19h </p>
            <hr/>
            <div className='deux'>
                <div className="tel">
                    <img src="/images/phone.png" alt="logo" />
                    <p>Par téléphone : </p>
                    <p>Contactez nous par téléphone au +33 6 56 56 65</p>
                </div>
                <div className="loc">
                <img src="/images/location.png" alt="logo" />
                <p>Notre localisation : </p>
                <p>2 rue Jacques Lo Lille</p>
            </div>
            </div>
            <a href='/Formulaire'><button>Nous contacter</button></a>
        </div>
    )
}

export default Contact;