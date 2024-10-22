import React, { useEffect, useState } from 'react';
import Carrossel from '../Carousel';
import './style.css';

const loadProducts = async () => {
    const response = await fetch('/src/components/WeOffer/database.json');
    const data = await response.json();
    return data;
};

function WeOffer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts().then(data => setProducts(data)).catch(error => console.error('Erro ao carregar produtos:', error));
    }, []);

    return (
        <section className="productsWeOffer">
            <div className="productsTitle">
                <h2>MAIS WEOFFER</h2>
                {/* <a
                    href="https://wa.me/+5581997420369"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer">
                    QUERO VENDER MAIS
                </a> */}
            </div>
            <Carrossel products={products} />
        </section>
    );
}

export default WeOffer;
