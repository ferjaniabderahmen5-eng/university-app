import { useState } from "react";

import "./App.css";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

import studentImage from "./assets/photo.jpg";

function App() {
  // Liste initiale des étudiants
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: studentImage,
    },

    {
      id: 2,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: studentImage,
    },

    {
      id: 3,
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
      image: studentImage,
    },
  ]);

  // États du formulaire
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState(
    "Génie Logiciel et Systèmes d'Information"
  );
  const [anneeEtude, setAnneeEtude] = useState("2ème année");
  const [groupe, setGroupe] = useState("GLSI 2");
  const [ville, setVille] = useState("");

  // État pour le filtre par filière
  const [filtreFiliere, setFiltreFiliere] = useState("Toutes");

  // Ajouter un étudiant
  const ajouterEtudiant = (e) => {
    e.preventDefault();

    // Vérifier que les champs obligatoires sont remplis
    if (prenom.trim() === "" || nom.trim() === "") {
      alert("Veuillez saisir le prénom et le nom !");
      return;
    }

    const nouvelEtudiant = {
      id: Date.now(),
      prenom: prenom,
      nom: nom,
      email: email,
      telephone: telephone,
      filiere: filiere,
      anneeEtude: anneeEtude,
      groupe: groupe,
      ville: ville,
      image: studentImage,
    };

    // Ajouter le nouvel étudiant dans la liste
    setEtudiants([...etudiants, nouvelEtudiant]);

    // Vider le formulaire
    setPrenom("");
    setNom("");
    setEmail("");
    setTelephone("");
    setFiliere("Génie Logiciel et Systèmes d'Information");
    setAnneeEtude("2ème année");
    setGroupe("GLSI 2");
    setVille("");
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.id !== id)
    );
  };

  // Modifier le prénom d'un étudiant
  const modifierPrenom = (id, nouveauPrenom) => {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, prenom: nouveauPrenom }
          : etudiant
      )
    );
  };

  // Filtrer les étudiants par filière
  const etudiantsFiltres =
    filtreFiliere === "Toutes"
      ? etudiants
      : etudiants.filter(
          (etudiant) => etudiant.filiere === filtreFiliere
        );

  return (
    <div className="app-container">
      <Header />

      <Navbar />

      <main className="main-content">
        <h1>Gestion des étudiants</h1>

        {/* Formulaire d'ajout */}
        <section className="form-section">
          <h2>Ajouter un étudiant</h2>

          <form onSubmit={ajouterEtudiant}>
            <label>Prénom :</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Saisir le prénom"
              required
            />

            <label>Nom :</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Saisir le nom"
              required
            />

            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@gmail.com"
            />

            <label>Téléphone :</label>
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Numéro de téléphone"
            />

            <label>Filière :</label>
            <select
              value={filiere}
              onChange={(e) => setFiliere(e.target.value)}
            >
              <option value="Génie Logiciel et Systèmes d'Information">
                Génie Logiciel et Systèmes d'Information
              </option>

              <option value="Informatique">
                Informatique
              </option>

              <option value="Marketing">
                Marketing
              </option>
            </select>

            <label>Année d'étude :</label>
            <select
              value={anneeEtude}
              onChange={(e) => setAnneeEtude(e.target.value)}
            >
              <option value="1ère année">1ère année</option>
              <option value="2ème année">2ème année</option>
              <option value="3ème année">3ème année</option>
            </select>

            <label>Groupe :</label>
            <input
              type="text"
              value={groupe}
              onChange={(e) => setGroupe(e.target.value)}
              placeholder="Exemple : GLSI 2"
            />

            <label>Ville :</label>
            <input
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              placeholder="Saisir la ville"
            />

            <button type="submit">
              Ajouter étudiant
            </button>
          </form>
        </section>

        {/* Filtre par filière */}
        <section className="filter-section">
          <h2>Filtrer les étudiants</h2>

          <label>Choisir une filière :</label>

          <select
            value={filtreFiliere}
            onChange={(e) => setFiltreFiliere(e.target.value)}
          >
            <option value="Toutes">Toutes les filières</option>

            <option value="Génie Logiciel et Systèmes d'Information">
              Génie Logiciel et Systèmes d'Information
            </option>

            <option value="Informatique">
              Informatique
            </option>

            <option value="Marketing">
              Marketing
            </option>
          </select>
        </section>

        {/* Affichage des étudiants */}
        <section className="students-section">
          <h2>Liste des étudiants</h2>

          <div className="students">
            {etudiantsFiltres.length > 0 ? (
              etudiantsFiltres.map((etudiant) => (
                <StudentCard
                  key={etudiant.id}
                  {...etudiant}
                  supprimerEtudiant={supprimerEtudiant}
                  modifierPrenom={modifierPrenom}
                />
              ))
            ) : (
              <p>Aucun étudiant trouvé.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
