import React, { useState } from 'react'
import Carrossel from './Carrosel';
import './style.css';


function Products() {

    const [products] = useState([
        {
            title: "Super Restaurante",
            image: "https://th.bing.com/th/id/OIG4.RYl2JWwUGNyY36Er21IK?w=1024&h=1024&rs=1&pid=ImgDetMain",
            resumeDescription: "Orientação Completa para Impulsionar Seu Restaurante no IFood",
            description: "Com nossa experiência, você receberá orientação e acompanhamento passo a passo para posicionar seu restaurante no iFood e garantir resultados excepcionais!"
        },
        {
            title: "Garantia de Resultado: Crescimento Rápido e Consistente",
            image: "https://th.bing.com/th/id/OIG4.cTzMcsEs2sWoi4wjS4y9?pid=ImgGn",
            resumeDescription: "Crescimento Mínimo 25% ou Seu Dinheiro de Volta",
            description: "Aumente suas vendas em pelo menos 25% nos primeiros três meses ou devolvemos seu dinheiro. Nossa abordagem garante crescimento rápido e seguro."
        },
        {
            title: "Método Comprovado: Resultados Garantidos",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Mais de 02 Anos Gerando Resultados.",
            description: "Com mais de 99.5% de sucesso nas lojas gerenciadas pela nossa equipe, garantimos que seu restaurante também terá resultados positivos com nossa metodologia validada."
        },
        {
            title: "Gestão Estratégica: Aumente Suas Vendas",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Serviço especializado em gestão de vendas no iFood",
            description: "Nosso serviço de gestão para iFood é focado em maximizar suas vendas com estratégias testadas e otimizadas para aumentar suas margens de lucro e a visibilidade da sua marca."
        },
        {
            title: "Venda Mais: Cresça com Estratégia",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Crescimento de no mínimo 25% Garantido ",
            description: "Impulsionamos suas vendas em pelo menos 25% nos primeiros três meses, usando estratégias comprovadas que garantem resultados rápidos e sustentáveis."
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
