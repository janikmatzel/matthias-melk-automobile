import './App.css';
import { useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div class="topnav">
        <div class="active">Home</div>
        <div onClick={() => navigate('/dienstleistungen')}>Dienstleistungen</div>
      </div>

      <h1><div className="blue">M</div>atthias&nbsp;<div className="blue">M</div>elk Automobile</h1>

      <div className="textbox">
        <h2>Philosophie und mein Versprechen</h2>
        Als Kfz-Meister und Betriebswirt mit 35 Jahren Erfahrung in der Kfz-Branche habe ich mich darauf spezialisiert gezielt Fahrzeuge zu suchen und zu verkaufen die meinen hohen Ansprüchen entsprechen.
        Ich vertreibe nur Fahrzeuge, die eine nachvollziehbare Historie haben und lückenlos nach den Herstellervorgaben gewartet worden sind und entsprechend dokumentiert (Serviceheft) wurden.
        Diese Rahmenbedingungen gewährleisten dem Käufer eine sichere und sorgenfreie Mobilität.
      </div>

      <div className="textbox">
        <h2>Unser Anspruch</h2>
        Wir sind ein inhabergeführter Kfz-Handelsbetrieb mit Menschen, die sich persönlich für sie engagieren und Verantwortung übernehmen.
        Jeder Kontakt und Dialog mit Ihnen ist uns wichtig und bereitet uns Freude.
        Als Interessent und Kunde stehen sie für uns im Mittelpunkt, verbunden mit dem Ziel das sie mit dem Fahrzeug und unseren Dienstleistungen rund um das Auto vollkommen zufrieden sind.
      </div>

      <div className="textbox">
        <h2>Impressum</h2>
        <ul>
          <li>Angaben gemäß §5 TMG:</li>
          <p></p>
          <li>Matthias Melk Automobile</li>
          <li>Kfz-Meister</li>
          <li>Hauptstr. 20</li>
          <li>82390 Eberfing / Deutschland</li>
          <p></p>
          <li>Vertreten durch:</li>
          <li>Matthias Melk</li>
          <p></p>
          <li>Kontakt:</li>
          <li>Tel.: +(49) 8802 9138808</li>
          <li>Mobil: +(49)163 2904969</li>
          <li>Fax: +(49) 8802 9139755</li>
          <li>E-Mail: m.melk-automobile@t-online.de</li>
          <p></p>
          <li>Umsatzsteuer:</li>
          <li>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</li>
          <li>DE 51627081394</li>
        </ul>
      </div>


      <div className="textbox">
        <h2>Kontakt</h2>
        <p></p>
        <div className="contact"><div className="blue">M</div>atthias&nbsp;<div className="blue">M</div>elk Automobile</div>
        <p></p>
        <ul>
          <li>Postanschrift:</li>
          <li>Hauptstr. 20</li>
          <li>82390 Eberfing</li>
          <li>Tel.: 08802/9138808</li>
          <li>e-mail: m.melk-automobile@t-online.de</li>
        </ul>
      </div>
    </div>
  );
}

export default App;