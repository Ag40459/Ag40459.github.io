import React from 'react';
import './style.css';

function Modal({ product, onClose }) {
    if (!product) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {/* <a href="https://wa.me/YOUR_PHONE_NUMBER" className="whatsapp-button" target="_blank" rel="noopener noreferrer">Entre em Contato</a> */}
                <button className="close-button" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

export default Modal;
