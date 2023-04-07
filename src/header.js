import './header.css';
import mobile from './pics/mobileDE.jpeg';
import { useNavigate } from "react-router-dom";
import React from 'react';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="topnav">
                <div onClick={() => navigate('/')}>Home</div>
                <div onClick={() => navigate('/dienstleistungen')}>Dienstleistungen</div>
                <div onClick={() => navigate('/kooperationspartner')}>Kooperationspartner</div>
                <a href="https://home.mobile.de/MATTHIASMELKAUTOMOBILE#ses" target="_blank" rel="noopener noreferrer"><div><img id="mobile" src={mobile} alt="mobil.de" /></div></a>
            </div>
        </div >
    );
}