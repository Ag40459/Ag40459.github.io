import React from 'react';
import './style.css';

function Modal({ product }) {
    return (
        <div className="product-card">
            {product && (
                <>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </>
            )}
        </div>
    );
}

export default Modal;
