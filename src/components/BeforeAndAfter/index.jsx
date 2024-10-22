import React, { useEffect, useState } from 'react';
import Carrossel from '../Carousel';
import './style.css';

const loadProducts = async () => {
    const response = await fetch('/src/components/BeforeAndAfter/database.json');
    const data = await response.json();
    return data;
};

function BeforeAndAfter() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts().then(data => setProducts(data)).catch(error => console.error('Erro ao carregar produtos:', error));
    }, []);

    return (
        <section className="products">
            <h2>NOSSOS RESULTADOS</h2>
            <Carrossel products={products} />
        </section>
    );
}

export default BeforeAndAfter;
