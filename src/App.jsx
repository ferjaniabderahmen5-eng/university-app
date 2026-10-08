import "./App.css";
import photo from "./assets/photo.jpg.jpg";
const student = {
  nom : "Abderrahmen ",
  prenom:"ferjani",
  email:"ferjaniabderahmen5@gmail.com",
  tlf:"99739313",
  fliere:"Génie Logiciel et Système d'information",
  anné:"2026",
  ville:"mahdia",
  grp:"glsi2",
}
function App(){
  return(
    <div className="card">
      <img src={photo} alt="photo étudiant"/>
      <h1>Fiche étudiant</h1>
      <p>Nom et prénom:{student.nom} {student.prenom}</p>
      <p>Email:{student.email}</p>
      <p>Téléphone:+216{student.tlf}</p>
      <p>Filière:{student.fliere}</p>
      <p>Anné d'étude:{student.anné}</p>
      <p>Groupe:glsi2</p>
      <p>Ville :{student.ville}</p>
      <a href="mailto:ferjaniabderahmen5@gmail.com">
        <button>Contacter</button>
      </a>

    </div>
  );
}

export default App;
