import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/photo.jpg";

function App() {
  // 4. Tableau contenant plusieurs étudiants
  const etudiants = [
    {
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
  ];

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main className="main-content">
        <div className="container">
          {/* 5 & 6. Utilisation de map() et ajout d'une key unique */}
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              anneeEtude={etudiant.anneeEtude}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              image={etudiant.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
