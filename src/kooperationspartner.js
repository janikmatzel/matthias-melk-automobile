import './kooperationspartner.css';
import yareto from './pics/Yareto2.png';
import meneks from './pics/Meneks.png';
import { useNavigate } from "react-router-dom";
import React from 'react';

export const Kooperationspartner = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div onClick={() => navigate('/dienstleistungen')}>Dienstleistungen</div>
                <a href="https://home.mobile.de/MATTHIASMELKAUTOMOBILE#ses" target="_blank" rel="noopener noreferrer"><div>Fahrzeuge</div></a>
                <div onClick={() => navigate('/kontakt')}>Kontakt</div>
                <div className="active">Kooperationspartner</div>
                <div onClick={() => navigate('/impressum')}>Impressum</div>
            </div>
            <div className="textbox">
                <h2>Kooperationspartner</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><img id="yareto" src={yareto} alt="Kooperationspartner Yareto" /></td>
                            <td>Yareto GmbH</td>
                            <td>Web: <a href="www.yareto.de" target="_blank" rel="noopener noreferrer">www.yareto.de</a></td>
                        </tr>
                        <tr>
                            <td><img id="meneks" src={meneks} alt="Kooperationspartner Meneks" /></td>
                            <td>MENEKS AG</td>
                            <td>Web: <a href="www.meneks.de" target="_blank" rel="noopener noreferrer">www.meneks.de</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}