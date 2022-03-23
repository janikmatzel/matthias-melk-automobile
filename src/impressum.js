import './impressum.css';
import { useNavigate } from "react-router-dom";
import React from 'react';

export const Impressum = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div onClick={() => navigate('/dienstleistungen')}>Dienstleistungen</div>
                <a href="https://home.mobile.de/MATTHIASMELKAUTOMOBILE#ses" target="_blank"><div>Fahrzeuge</div></a>
                <div onClick={() => navigate('/kontakt')}>Kontakt</div>
                <div class="active">Impressum</div>
            </div>
            <div className="textbox">
                <h2>Impressum</h2>
                <div>Angaben gemäß §5 TMG:</div>
                <p></p>
                <div>Matthias Melk Automobile</div>
                <div>Kfz-Meister</div>
                <div>Hauptstr. 20</div>
                <div>82390 Eberfing / Deutschland</div>
                <p></p>
                <div>Vertreten durch:</div>
                <div>Matthias Melk</div>
                <p></p>
                <div>Kontakt:</div>
                <div>Tel.: +(49) 8802 9138808</div>
                <div>Mobil: +(49)163 2904969</div>
                <div>Fax: +(49) 8802 9139755</div>
                <div>E-Mail: m.melk-automobile@t-online.de</div>
                <p></p>
                <div>Umsatzsteuer:</div>
                <div>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</div>
                <div>DE 51627081394</div>
            </div>
        </div>
    );
}