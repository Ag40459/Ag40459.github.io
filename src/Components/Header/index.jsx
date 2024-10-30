import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <a href="#" className="logo">
                    <img src="./assets/images/logo.png" alt="Funel logo" />
                </a>
                <div className="navbar-wrapper">
                    <button className="navbar-menu-btn" data-navbar-toggle-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Principal</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a href="#result" className="nav-link">Resultados</a>
                            </li>
                            <li className="nav-item">
                                <a href="#features" className="nav-link">Avaliações</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

