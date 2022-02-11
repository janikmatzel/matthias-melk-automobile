import './dienstleistungen.css';
import { useNavigate } from "react-router-dom";

export const Dienstleistungen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div class="active">Dienstleistungen</div>
                <div onClick={() => navigate('/kontakt')}>Kontakt</div>
                <div onClick={() => navigate('/impressum')}>Impressum</div>
            </div>
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
                </ul>
            </div>
        </div>
    );
}