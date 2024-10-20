import React from 'react';
import './style.css';
import PlaceholderImage from '../../assets/logoEvolSimples.jpeg'; // Substitua com a imagem desejada

function PromotionBanner() {
    return (
        <div className="promotion-banner">
            <div className="left-section">
                <img src={PlaceholderImage} alt="Placeholder" />
                <ul>
                    <li>+ De 850 Clientes Atendidos em todo o Brasil</li>
                    <li>+ De 4 Milhões Enviados para nossos clientes em 1 ano</li>
                    <li>Garantia de Resultado ou seu dinheiro de volta</li>
                </ul>
            </div>
            <div className="right-section">
                <h2>GESTÃO DE IFOOD COMPLETA</h2>
                <ul>
                    <li>Monitoramento do ifood</li>
                    <li>Gestão do cardápio e das ordens dos itens</li>
                    <li>Movimentação do feed do ifood</li>
                    <li>Suporte para tirar dúvidas do cliente</li>
                    <li>Criação de promoções exclusivas preservando o lucro</li>
                    <li>Relatório mensal</li>
                    <li>Feedback semanal</li>
                </ul>
                <button className="promotion-button">QUERO VENDER MAIS NO IFOOD</button>
            </div>
        </div>
    );
}

export default PromotionBanner;
