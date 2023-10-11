import { useState } from 'react'
import "./Formulaire.scss"
import { Link } from 'react-router-dom';


const handleSubmit = (event) => {
    event.preventDefault()
   // console.log(firstName);
}

const Formulaire = () => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3001', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                message
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return(
        <div> 
            <h1>Contactez-nous</h1>
            <form onSubmit={handleSubmit}>
            <div className='formulaire'>
                <label htmlFor='lastName'>Nom</label>
                <input value={lastName} required type='text' name='lastName' id='lastName' onChange={(event) => setLastName(event.target.value)}></input>
                <br />
                <label htmlFor='firstName'>Prenom</label>
                <input value={firstName} required type='text' name='firstName' id='firstName' onChange={(event) => setFirstName(event.target.value)}></input>
                <br />
                <label htmlFor='phone'>Téléphone</label>
                <input value={phone} required type='tel' name='phone' id='phone' onChange={(event) => setPhone(event.target.value)}></input>
                <br />
                <label htmlFor='email'>Email</label>
                <input value={email} required type='email' name='email' id='email' onChange={(event) => setEmail(event.target.value)}></input>
                <br />
                <label htmlFor='message'>Message</label>
                <textarea value={message} required type='text' name='message' id='message' onChange={(event) => setMessage(event.target.value)}></textarea>
                <button>Envoyer</button>
            </div>
            </form>
        </div>
    )
}

export default Formulaire
