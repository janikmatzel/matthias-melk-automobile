import './dienstleistungen.css';
import kfzInnung from './pics/Kfz-Innung.JPG';
import motorhaube from './pics/Motorhaube.JPG';
import React from 'react';

export const Dienstleistungen = () => {

    return (
        <div className="full-height">
            <div className="textbox">
                <h2>Unsere Dienstleistungen</h2>

                <ul className="ulDienstleistungen">
                    <li>Zulassung des Fahrzeuges für Sie ab 120.- € incl. MwSt.</li>
                    <li>Lieferung zu Ihrem Wunschort innerhalb Deutschlands ab 150.- € incl. MwSt.</li>
                    <li>Individuelle Beratung rund ums Auto</li>
                    <li>Inzahlungnahme von Fahrzeugen</li>
                    <li>Probefahrt</li>
                    <li>Vermittlung und Suche von Automobilen</li>
                    <li>Maßgeschneiderte Angebote zur Finanzierung und zum Leasing von Fahrzeugen</li>
                    <li>Vermittlung und Beratung von Finanzierung und Leasing</li>
                    <li>Vermittlung von Fzg. Garantien und Reperaturkostenversicherungen</li>
                </ul>
                <div className="flex">
                    <img id="motorhaube" src={motorhaube} alt="Matthias Melk mit einem Blick in den Motorraum" />
                    <img id="kfzInnung" src={kfzInnung} alt="Kfz-Innung" />
                </div>
            </div>
        </div>
    );
}