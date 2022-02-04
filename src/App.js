import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Impressum</a>
        <a href="#contact">Dienstleistungen</a>
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
        <p>Angaben gemäß §5 TMG:</p>
        <p></p>
        <p>Matthias Melk Automobile</p>
        <p>Kfz-Meister</p>
        <p>Hauptstr. 20</p>
        <p>82390 Eberfing / Deutschland</p>
        <p></p>
        <p>Vertreten durch:</p>
        <p>Matthias Melk</p>
        <p></p>
        <p>Kontakt:</p>
        <p>Tel.: +(49) 8802 9138808</p>
        <p>Mobil: +(49)163 2904969</p>
        <p>Fax: +(49) 8802 9139755</p>
        <p>E-Mail: m.melk-automobile@t-online.de</p>
        <p></p>
        <p>Umsatzsteuer:</p>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
        <p>DE 51627081394</p>
      </div>


      <div className="textbox">
        <h2>Kontakt</h2>
        <p></p>
        <div className="contact"><div className="blue">M</div>atthias&nbsp;<div className="blue">M</div>elk Automobile</div>
        <p></p>
        <p>Postanschrift:</p>
        <p>Hauptstr. 20</p>
        <p>82390 Eberfing</p>
        <p>Tel.: 08802/9138808</p>
        <p>e-mail: m.melk-automobile@t-online.de</p>
      </div>
    </div>
  );
}

export default App;
