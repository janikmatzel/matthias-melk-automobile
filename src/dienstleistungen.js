import './dienstleistungen.css';
import kfzInnung from './pics/Kfz-Innung.JPG';
import motorhaube from './pics/Motorhaube.JPG';
import { useNavigate } from "react-router-dom";
import React from 'react';

export const Dienstleistungen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div class="active">Dienstleistungen</div>
                <a href="https://home.mobile.de/MATTHIASMELKAUTOMOBILE#ses" target="_blank" rel="noopener"><div>Fahrzeuge</div></a>
                <div onClick={() => navigate('/kontakt')}>Kontakt</div>
                <div onClick={() => navigate('/impressum')}>Impressum</div>
            </div>
            <div className="textbox">
                <h2>Unsere Dienstleistungen</h2>
                <div className="flex">
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
                    <img id="kfzInnung" src={kfzInnung} width="12%" height="12%" alt="Kfz-Innung" />
                </div>
            </div>
            <img id="motorhaube" src={motorhaube} width="30%" height="30%" alt="Matthias Melk mit einem Blick in den Motorraum" />
        </div>
    );
}