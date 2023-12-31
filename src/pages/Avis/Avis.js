import { useState } from "react";
import './Avis.scss';

const handleSubmit = (event) => {
    event.preventDefault();
}

const Avis = () => {
    const [nom, setNom] = useState(''); // Utiliser un état distinct pour le nom
    const [note, setNote] = useState(''); // Utiliser un état distinct pour la note
    const [commentaire, setCommentaire] = useState(''); // Utiliser un état distinct pour l'avis

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://fitnesspark.onrender.com', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nom,
                commentaire
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    



    return (
        <div>
            <h1>Donnez-nous votre avis !</h1>
            <form onSubmit={handleSubmit}>
                <div className="Avis">
                    <label htmlFor='LastName'>Nom</label>
                    <input
                        value={nom}
                        required
                        type='text'
                        name='LastName'
                        id='LastName'
                        onChange={(event) => setNom(event.target.value)} // Mettre à jour le nom
                    />
                    <label htmlFor="avis">Votre avis</label>
                    <input
                        value={commentaire}
                        required
                        type='text'
                        name='commentaire'
                        id="avis"
                        onChange={(event) => setCommentaire(event.target.value)} // Mettre à jour l'avis
                    />
                    <br />
                    <div className="rating">
                        <label htmlFor='note'>Note</label>
                        <a href="#5" title="Donner 5 étoiles" onClick={() => setNote(5)}>☆</a>
                        <a href="#4" title="Donner 4 étoiles" onClick={() => setNote(4)}>☆</a>
                        <a href="#3" title="Donner 3 étoiles" onClick={() => setNote(3)}>☆</a>
                        <a href="#2" title="Donner 2 étoiles" onClick={() => setNote(2)}>☆</a>
                        <a href="#1" title="Donner 1 étoile" onClick={() => setNote(1)}>☆</a>
                    </div>

                    <button>Envoyer</button>
                </div>
            </form>
        </div>
    )
}

export default Avis;
