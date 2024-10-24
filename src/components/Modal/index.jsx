import React from 'react';
import './style.css';

function Modal({ product, image, onClose }) {
    if (!product && !image) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {image ? (
                    <img src={image} alt="Imagem ampliada" className="modal-image" />
                ) : (
                    <>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </>
                )}
                <button className="close-button" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

export default Modal;
