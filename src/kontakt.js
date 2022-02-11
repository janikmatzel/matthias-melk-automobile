import './kontakt.css';
import { useNavigate } from "react-router-dom";

export const Kontakt = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div onClick={() => navigate('/dienstleistungen')}>Dienstleistungen</div>
                <div class="active">Kontakt</div>
                <div onClick={() => navigate('/impressum')}>Impressum</div>
            </div>
            <div className="textbox">
                <h2>Kontakt</h2>
                <div><font color="#4e7de9"><b>M</b></font>atthias</div>
                <div><font color="#4e7de9"><b>M</b></font>elk</div>
                <div>Automobile</div>
                <p></p>
                <div>Postanschrift:</div>
                <div>Hauptstr. 20</div>
                <div>82390 Eberfing</div>
                <div>Tel.: 08802/9138808</div>
                <div>e-mail: m.melk-automobile@t-online.de</div>
            </div>
        </div>
    );
}