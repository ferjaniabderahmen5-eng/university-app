import "./StudentCard.css";

function StudentCard(props) {
  // Gestion d'une prop par défaut si elle n'est pas fournie
  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h2>Fiche étudiant</h2>
      <p>
        <strong>Nom & Prénom :</strong> {props.prenom} {props.nom}
      </p>
      <p>
        <strong>Email :</strong> {props.email}
      </p>
      <p>
        <strong>Téléphone :</strong> {props.telephone}
      </p>
      <p>
        <strong>Filière :</strong> {props.filiere}
      </p>
      <p>
        <strong>Année :</strong> {props.anneeEtude}
      </p>
      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>
      <p>
        <strong>Ville :</strong> {ville}
      </p>
      <button className="btn-contact">Contacter</button>
    </div>
  );
}

export default StudentCard;