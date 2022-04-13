import './kooperationspartner.css';
import yareto from './pics/Yareto2.png';
import meneks from './pics/Meneks.png';
import React from 'react';

export const Kooperationspartner = () => {

    return (
        <div className="full-height">
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