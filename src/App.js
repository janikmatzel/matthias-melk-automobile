import './App.css';
import portrait from './pics/Portrait.jpg';
import inCar from './pics/InCar.JPG';
import logo from './pics/Logo.jpeg';
import React from 'react';

const App = () => {

  return (
    <div className="full-height">
      <div className="heading">
        <img id="logo" src={logo} alt="Firmenlogo Matthias Melk Automobile" />
      </div>

      <div className="flexbox">
        <div className="text">
          <h2>Philosophie und mein Versprechen</h2>
          Als Kfz-Meister und Betriebswirt mit 35 Jahren Erfahrung in der Kfz-Branche habe ich mich darauf spezialisiert, gezielt Fahrzeuge zu suchen und zu verkaufen, die meinen hohen Ansprüchen entsprechen.
          Ich vertreibe nur Fahrzeuge, die eine nachvollziehbare Historie haben und lückenlos nach den Herstellervorgaben gewartet worden sind und entsprechend dokumentiert (Serviceheft) wurden.
          Diese Rahmenbedingungen gewährleisten dem Käufer eine sichere und sorgenfreie Mobilität.
        </div>

        <img id="portrait" src={portrait} alt="Portrait Matthias Melk" />
      </div>

      <div className="flexbox">
        <img id="incar" src={inCar} alt="Matthias Melk am Steuer" />
        <div className="text">
          <h2>Unser Anspruch</h2>
          Wir sind ein inhabergeführter Kfz-Handelsbetrieb mit Menschen, die sich persönlich für Sie engagieren und Verantwortung übernehmen.
          Jeder Kontakt und Dialog mit Ihnen ist uns wichtig und bereitet uns Freude.
          Als Interessent und Kunde stehen Sie für uns im Mittelpunkt, verbunden mit dem Ziel, dass Sie mit dem Fahrzeug und unseren Dienstleistungen rund um das Auto vollkommen zufrieden sind.
        </div>
      </div>
    </div >
  );
}

export default App;