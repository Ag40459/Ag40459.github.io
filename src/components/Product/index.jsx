import React, { useState } from 'react';
import Carrossel from './Carrosel';
import './style.css';

function Products() {
    const [products] = useState([
        {
            title: "Gestão de Pedidos",
            image: "url_da_imagem1.jpg",
            description: "Gerenciamento eficiente dos pedidos, garantindo agilidade e precisão."
        },
        {
            title: "Relatórios Detalhados",
            image: "url_da_imagem2.jpg",
            description: "Relatórios completos sobre vendas, marketing e produtos."
        },
        {
            title: "Suporte 24/7",
            image: "url_da_imagem3.jpg",
            description: "Suporte contínuo para resolver qualquer problema rapidamente."
        }
    ]);

    return (
        <section className="products">
            <h2>Nossos Produtos</h2>
            <Carrossel products={products} />
        </section>
    );
}

export default Products;
