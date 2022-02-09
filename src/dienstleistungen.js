import './dienstleistungen.css';
import { useNavigate } from "react-router-dom";

export const Dienstleistungen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div class="active">Dienstleistungen</div>
            </div>
            <div className="textbox">
                <h2>Unsere Dienstleistungen</h2>
                <ul className="ulDienstleistungen">
                    <li>Zulassung des Fahrzeuges für Sie ab 120.- € incl. MwSt.</li>
                    <li>Lieferung zu Ihrem Wunschort innerhalb Deutschlands ab 150.- € incl. MwSt.</li>
                    <li>Individuelle Beratung</li>
                    <li>Inzahlungnahme von Fahrzeugen</li>
                    <li>Probefahrt</li>
                    <li>Fzg. Vermittlung und Suche</li>
                    <li>Leasing und Finanzierung von Fahrzeugen</li>
                </ul>
            </div>
        </div>
    );
}