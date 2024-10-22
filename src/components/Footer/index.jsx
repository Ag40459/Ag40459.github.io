import React from 'react';
import './style.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importar ícones das redes sociais

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h3>Evol Gestão Integrada</h3>
                <p>&#169; 2022 Evol Gestão Integrada - Todos os direitos reservados.</p>
            </div>
            <div className="footer-center">
                <p>Telefone para contato: <a href="tel:+5581997420369">+55 81 99742-0369</a></p>
                <p>Email de contato: <a href="mailto:comercial@evolgestaointegrada.com.br">comercial@evolgestaointegrada.com.br</a></p>
            </div>
            <div className="footer-right">
                <p>Siga-nos nas redes sociais:</p>
                <a href="https://www.facebook.com/EvolGestaoIntegrada" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/EvolGestaoIntegrada" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/EvolGestaoIntegrada" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
