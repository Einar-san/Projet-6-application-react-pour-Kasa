import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function HeaderContent () {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    return (

            <div className="header-content">
                <div className="logo"><img src={process.env.PUBLIC_URL + '/LOGO.svg'} alt={"Logo KASA"}/></div>
                <nav>
                    <a href="/" className={activeLink === '/' ? 'active' : ''}>Accueil</a>
                    <a href="/about" className={activeLink === '/about' ? 'active' : ''}>À propos</a>
                </nav>
            </div>

    )
}