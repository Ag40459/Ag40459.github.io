import React from 'react';
import './style.css';
import PlaceholderImage from '../../assets/logoEvolSimples.jpeg'; // Substitua com a imagem desejada

function PromotionBanner() {
    return (
        <div className="promotion-banner">
            <div className="left-section">
                <img src={PlaceholderImage} alt="Placeholder" />
                <ul>
                    <li>GRANTIA DE RESULTADO OU SEU DINHEIRO DE VOLTA 💰</li>
                </ul>
            </div>
            <div className="right-section">
                <h2>📈GESTÃO COMPLETA DO SEU IFOOD</h2>
                <ul>
                    <li>👁️‍🗨️ Monitoramento constante do iFood</li>
                    <li>🛠️ Gestão detalhada do cardápio e dos itens</li>
                    <li>🔄 Fazemos sua precificação para que não peca nada</li>
                    <li>💬 Suporte sempre pronto para tirar dúvidas dos clientes</li>
                    <li>💡 Promoções exclusivas que maximizam o lucro sem dor de cabeça</li>
                    <li>📊 Relatório mensal com tudo o que você precisa saber</li>
                    <li>🔔 Feedback semanal para ajustar a estratégia e melhorar ainda mais</li>

                </ul>
                <a
                    href="https://wa.me/+5581997420369"
                    className="promotion-button"
                    target="_blank"
                    rel="noopener noreferrer">
                    QUERO VENDER MAIS NO IFOOD
                </a>
            </div>
        </div>
    );
}

export default PromotionBanner;
