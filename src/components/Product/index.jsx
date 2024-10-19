import React, { useState } from 'react'
import Carrossel from './Carrosel';
import './style.css';


function Products() {

    const [products] = useState([
        {
            title: "Gestão de Pedidos",
            image: "https://th.bing.com/th/id/OIG4.RYl2JWwUGNyY36Er21IK?w=1024&h=1024&rs=1&pid=ImgDetMain",
            description: "Gerenciamento eficiente dos pedidos, garantindo agilidade e precisão."
        },
        {
            "title": "Relatórios Detalhados",
            "image": "https://th.bing.com/th/id/OIG4.cTzMcsEs2sWoi4wjS4y9?pid=ImgGn",
            "description": "A GESTÃO DE IFOOD É UMA PRESTAÇÃO DE SERVIÇO FOCADO EM ALAVANCAR SUAS VENDAS NO IFOOD, ONDE USAMOS AS ESTRATEGIAS NECESSÁRIAS PARA FAZER SEU RESTAURANTE VENDER MAIS E VENDER COM LUCRO!."
        },
        {
            title: "Suporte 24/7",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            description: "Suporte contínuo para resolver qualquer problema rapidamente."
        }
    ]);

    return (
        <section className="products">
            <h2>Nossos Serviços</h2>
            <Carrossel products={products} />
        </section>
    );
}

export default Products;
