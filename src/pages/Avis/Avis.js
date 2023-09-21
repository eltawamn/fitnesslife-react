import { useState } from "react";
import './Avis.scss'

const handleSubmit = (event) => {
    event.preventDefault();
}

const Avis = () => {
    const [lastName, setLastName] = useState('')
    return (
        
        <div>
            <h1>Donnez nous votre avis !</h1>
            <form onSubmit={handleSubmit}>
            <div className="Avis">
            <label htmlFor='lastName'>Nom</label>
                <input value={lastName} required type='text' name='lastName' id='lastName' onChange={(event) => setLastName(event.target.value)}></input>
            <br />
            <div class="rating">
            <label htmlFor='Note'>Note</label>
                <a href="#5" title="Donner 5 étoiles">☆</a>
                <a href="#4" title="Donner 4 étoiles">☆</a>
                <a href="#3" title="Donner 3 étoiles">☆</a>
                <a href="#2" title="Donner 2 étoiles">☆</a>
                <a href="#1" title="Donner 1 étoile">☆</a>
            </div>  
            <label htmlFor="Avis">Votre avis</label>
                <textarea value={Avis} required type='text' name='Avis' id="Avis" onChange={(event) => setLastName(event.target.value)}></textarea>
                <button>Envoyer</button>
            </div>
            </form>
        </div>
    )
}

export default Avis
