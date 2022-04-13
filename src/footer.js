import './footer.css';
import React from 'react';

export const Footer = () => {

    return (
        <div>
            <div className="footer">
                <div className="impressum">
                    <div><strong>Impressum:</strong></div>
                    <p></p>
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
                <div className="kontakt">
                    <a className="link" href="mailto: m.melk-automobile@t-online.de">Kontaktieren Sie uns jetzt!</a>
                </div>
                <div className="logo">
                    <h1>
                        <div className="tiny-space"><strong className="stronger">M</strong>atthias</div>
                        <div className="tiny-space"><strong>M</strong>elk</div>
                        <div className="tiny-space"><strong>A</strong>utomobile</div>
                    </h1>
                    <div className="tiny-space"><b>Gebrauchte Automobile aus Meisterhand</b></div>
                </div>
            </div>
        </div>
    );
}