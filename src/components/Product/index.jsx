import React, { useState } from 'react'
import Carrossel from '../Carousel';
import './style.css';


function Products() {

    const [products] = useState([
        {
            title: "ALAVANCAGEM DE VENDAS",
            image: "https://th.bing.com/th/id/OIG4.RYl2JWwUGNyY36Er21IK?w=1024&h=1024&rs=1&pid=ImgDetMain",
            resumeDescription: "ORIENTAÇÃO COMPLETA PARA IMPULSIONAR SEU RESTAURANTE NO IFOOD",
            description: "Com nossa experiência, você receberá orientação e acompanhamento passo a passo para posicionar seu restaurante no iFood e garantir resultados excepcionais!"
        },
        {
            title: "ANALISE POR R$ 49,90 *PROMOÇÃO",
            image: "https://th.bing.com/th/id/OIG4.cTzMcsEs2sWoi4wjS4y9?pid=ImgGn",
            resumeDescription: "CRESCIMENTO MÍNIMO DE 25% OU SEU DINHEIRO DE VOLTA",
            description: "Aumente suas vendas em pelo menos 25% nos primeiros três meses ou devolvemos seu dinheiro. Nossa abordagem garante crescimento rápido e seguro."
        },
        {
            title: "IMPLANTAÇÃO DE LOJA",
            image: "https://th.bing.com/th/id/OIG4.cTzMcsEs2sWoi4wjS4y9?pid=ImgGn",
            resumeDescription: "VOCÊ SÓ VAI PRECISAR, ACEITAR OS PEDIDOS E ENTREGAR UMA BOA EXPERIENCIA PARA O CLIENTE FINAL!",
            description: "Aumente suas vendas em pelo menos 25% nos primeiros três meses ou devolvemos seu dinheiro. Nossa abordagem garante crescimento rápido e seguro."
        },

    ]);


    return (
        <section className="products">
            <div className="products-title">
                <h2>Serviços Mais Procurados</h2>
                <a
                    href="https://wa.me/+5581997420369"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer">
                    QUERO CONTRATAR
                </a>
            </div>

            <Carrossel products={products} />
        </section>
    );
}

export default Products;
