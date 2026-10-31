import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  // État pour afficher ou cacher les coordonnées
  const [afficherCoordonnees, setAfficherCoordonnees] =
    useState(false);

  // Afficher ou cacher les coordonnées
  const toggleCoordonnees = () => {
    setAfficherCoordonnees(!afficherCoordonnees);
  };

  // Modifier le prénom de l'étudiant
  const modifierPrenom = () => {
    const nouveauPrenom = prompt(
      "Entrer le nouveau prénom :",
      props.prenom
    );

    if (
      nouveauPrenom !== null &&
      nouveauPrenom.trim() !== ""
    ) {
      props.modifierPrenom(
        props.id,
        nouveauPrenom.trim()
      );
    }
  };

  // Supprimer l'étudiant
  const supprimerEtudiant = () => {
    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer cet étudiant ?"
    );

    if (confirmation) {
      props.supprimerEtudiant(props.id);
    }
  };

  // Ville par défaut
  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img
        src={props.image}
        alt="Photo de l'étudiant"
      />

      <h2>Fiche étudiant</h2>

      <p>
        <strong>Nom & Prénom :</strong>{" "}
        {props.prenom} {props.nom}
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

      {/* Affichage conditionnel des coordonnées */}
      {afficherCoordonnees && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {props.email}
          </p>

          <p>
            <strong>Téléphone :</strong> {props.telephone}
          </p>
        </div>
      )}

      {/* Bouton afficher / cacher */}
      <button
        className="btn-contact"
        onClick={toggleCoordonnees}
      >
        {afficherCoordonnees
          ? "Cacher les coordonnées"
          : "Afficher les coordonnées"}
      </button>

      {/* Bouton modifier le prénom */}
      <button
        className="btn-modifier"
        onClick={modifierPrenom}
      >
        Modifier le prénom
      </button>

      {/* Bouton supprimer */}
      <button
        className="btn-supprimer"
        onClick={supprimerEtudiant}
      >
        Supprimer
      </button>
    </div>
  );
}

export default StudentCard;