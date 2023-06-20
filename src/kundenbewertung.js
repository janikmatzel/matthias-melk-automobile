import './kundenbewertung.css';
import React from 'react';
import bewertung from './pics/Kundenbewertung.png'

export const Kundenbewertungen = () => {
    const bewertungen = [
        {
            id: 1,
            name: 'Ulrich Gamel            ',
            comment: 'Lieber Herr Melk, ich kann mich nicht erinnern, wann ich mal ein gebrauchtes Auto gekauft habe und daher immer nur die wildesten Ganovengeschichten von Autohändlern im Kopf hatte. Dementsprechend kritisch bin ich auch den Autokauf für meine Schwiegermutter angegangen! Traue keinem Gebrauchtwagenhändler war meine Devise. Aber auf einmal wurden wir fündig. Ein VW UP 1.0 mit echt wenigen Kilometern zu einen ganz guten Preis. Schon kam wieder hoch, „traue keinem Gebrauchtwagenhändler“ 😉. Ich könnte jetzt noch viel schreiben, was toll lief, inklusive dem neuen TÜV, der Zulassung mit Wunschkennzeichen, etc. Es hat einfach Spaß gemacht ein Auto bei Hr. Melk zu kaufen und wenn ich wieder mal ein gebrauchtes Auto brauche, werde ich die Suche ala Det Müller, bei Hr. Melk in Auftrag geben. Apropos, meiner Schwiegermutter gefällt der VW UP sehr, sehr gut und ist happy damit. Herzlichen Dank und bis zum nächsten mal, Uli',
            rating: 5
        },
        {
            id: 2,
            name: 'Kaan Karaduman',
            comment: 'Herr Melk ist für uns ein Glücksfall gewesen. Sehr hilfsbereit, kompetent, emphatisch und absolut freundlich und fair. Die 5 Sterne sind total verdient. Wenn es möglich wäre, würde ich zusätzliche 5 Sterne geben! Er hat uns top beraten, uns vieles an Bürokratie abgenommen und jeden Wunsch erfüllt. Es war eine Freude und uns eine Ehre Herrn Melk kennengelernt zu haben, und freuen uns ihn eines Tages wieder zu besuchen um unser nächstes Auto bei ihm zu kaufen. Absolut vertrauenswürdiger Händler und ein top Profi. Vielen herzlichen Dank noch einmal an dieser Stelle an ihn!!!',
            rating: 5
        },
        {
            id: 3,
            name: 'Markus von König',
            comment: 'Das sechs Jahren alte und von uns bei Herrn Melk gekaufte Auto war in einem makellosen Zustand, äußerlich, technisch und auch beim Fahren. Der Händler hat es offenbar auf die Akquise solcher Perlen auf dem Gebrauchtwagenmarkt abgesehen. Wir jedenfalls bestätigen nach unserem Kauf bei diesem Händler sehr gerne, dass wir ein gebrauchtes Auto bekommen haben, das nicht besonders billig, nicht besonders teuer, aber sehr preiswert war! Sehr freundlich fanden wir auch, dass er Händler, der 15 km von uns entfernt wohnt, das Auto persönlich mit Überführungskennzeichen zu uns nachhause gebracht hat, um uns aus der Patsche zu helfen, weil wir die Zulassung des gekauften Autos selbst nicht rechtzeitig geschafft haben. Insgesamt ein sehr seriöser, gewissenhafter und vertrauenswürdiger Händler!\n\nBei der Übernahme wäre ein wenigstens halbvoller Tank schön gewesen. Mehr dem Gefühl als dem Wert wegen.',
            rating: 5
        },
        {
            id: 4,
            name: 'Mesud K.',
            comment: 'Alles hat mir sehr gut gefallen. Von der ersten Kontaktaufnahme per Telefon, über den persönlichen Besichtigungstermin, bis zur Kaufabwicklung und Übergabe des Fahrzeugs. Sehr netter und angenehmer Händler, offen und ehrlich. Die Fahrzeughistorie hat er mir in Ruhe erzählt und jede meiner Fragen beantwortet. Er hat sich Zeit genommen für mich und wenn man einen Termin hat, wird diese Zeit exklusiv für den einen Kunden genutzt, das hat sich sehr gut angefühlt und so wohl habe ich mich selten bei einem Händler gefühlt. Hier wird man gut beraten, der Herr Melk war nicht aufdringlich und hat auch keinen Druck gemacht. Herr Melk hat sich an alle Absprachen und Termine gehalten, er war auch immer für Fragen erreichbar. Alles ist reibungslos abgelaufen, es hat sich gelohnt über 100 km zu fahren um das Farhzeig zu kaufen, das war es mir alle Male wert. Meine Empfehlungen!',
            rating: 5
        },
        {
            id: 5,
            name: 'Familie Killermann',
            comment: 'Wir haben bei Herrn Melk einen Besichtigungstermin für dieses Auto ausgemacht und wurden sehr gut beraten. Es wurde die gesamte Historie besprochen. Die Probefahrt wurde gemacht und anschließend wurde der Kaufvertrag unterschrieben. Wir bekamen noch zusätzlich einen Service und eine Hauptuntersuchung dazu. Da es uns nicht möglich war, das Auto selber abzuholen wurde es kurzerhand von Herrn Melk geliefert. Bei Schlüsselübergabe festgestellt das der Tank halb voll ist. Rundherum alles bestens gelaufen.',
            rating: 5
        },
    ];

    return (
        <div className="full-height">
            <div className="textbox">
                <h2>Kundenbewertungen</h2>

                <div className="flexbox">
                    <div className="text2">
                        Es ist schön zu sehen wie die Kundenbewertungen unsere Philosophie und Arbeitsqualität widerspiegeln.
                        Gleichzeitig möchte ich mich auf diesem Weg bei allen Kunden für die großartigen Bewertungen bedanken.
                        Es ist für mich Motivation und Ansporn zugleich, um auch weiterhin technisch hochwertige Gebrauchtwagen zu suchen und zu vertreiben.
                    </div>

                    <img id="bewertung" src={bewertung} alt="Kundenbewertung Mobile.de" />
                </div>
                {bewertungen.map(bewertung => (
                    <div className="reviewCard" key={bewertung.id}>
                        <h3>{bewertung.name}</h3>
                        <p>{bewertung.comment}</p>
                        <h3>Bewertung: {bewertung.rating}/5</h3>
                    </div>
                ))}
                <div className="reviewCard">Weitere Bewertungen finden Sie auf der Webseite von <a id='smalllink' href="https://www.mobile.de/bewertungen/MatthiasMelkAutomobile" target="_blank" rel="noopener noreferrer">Mobile.de</a></div>
            </div>
        </div >
    );
};
