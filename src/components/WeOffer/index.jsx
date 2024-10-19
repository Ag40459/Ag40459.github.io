import React, { useState } from 'react'
import Carrossel from './Carrosel';
import './style.css';


function WeOffer() {

    const [products] = useState([
        {
            title: "Suporte Para Tirar Suas Dúvidas",
            image: "https://wksbrasil.com.br/wp-content/uploads/2024/06/Pequenas-Empresas.jpg",
            resumeDescription: "Orientação completa para impulsionar seu restaurante no iFood",
            description: "Com nossa experiência, você receberá orientação e acompanhamento passo a passo para posicionar seu restaurante no iFood e garantir resultados excepcionais!"
        },
        {
            title: "Monitoramento Do Seu Ifood",
            image: "https://th.bing.com/th/id/OIG4.cTzMcsEs2sWoi4wjS4y9?pid=ImgGn",
            resumeDescription: "Resultados em 3 meses ou seu dinheiro de volta",
            description: "Aumente suas vendas em pelo menos 25% nos primeiros três meses ou devolvemos seu dinheiro. Nossa abordagem garante crescimento rápido e seguro."
        },
        {
            title: "FeedBack Semanal",
            image: "https://indexbe.com.br/wp-content/uploads/2024/05/image-38.png",
            resumeDescription: "Dois anos de resultados comprovados no mercado",
            description: "Com mais de 99.5% de sucesso nas lojas gerenciadas pela nossa equipe, garantimos que seu restaurante também terá resultados positivos com nossa metodologia validada."
        },
        {
            title: "Criação de Promoções Preservando o Seu Lucro",
            image: "https://previews.123rf.com/images/ideyweb/ideyweb1801/ideyweb180100121/93483588-mulher-de-neg%C3%B3cios-no-escrit%C3%B3rio-empres%C3%A1ria-trabalhando-na-mesa-de-trabalho-controle-de-fluxo-de.jpg",
            resumeDescription: "Serviço especializado em gestão de vendas no iFood",
            description: "Nosso serviço de gestão para iFood é focado em maximizar suas vendas com estratégias testadas e otimizadas para aumentar suas margens de lucro e a visibilidade da sua marca."
        },
        {
            title: "Relatório Mensal",
            image: "https://marketing-assets-benefits.ifood.com.br/cms/business_people_meeting_in_office_to_write_memos_o_2022_10_04_00_00_21_utc_como_Objeto_Inteligente_1_1_1_1afdbb6903.jpg",
            resumeDescription: "Crescimento garantido em até 3 meses",
            description: "Impulsionamos suas vendas em pelo menos 25% nos primeiros três meses, usando estratégias comprovadas que garantem resultados rápidos e sustentáveis."
        },
        {
            title: "Ajuda com Sua Precificação",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Crescimento garantido em até 3 meses",
            description: "Impulsionamos suas vendas em pelo menos 25% nos primeiros três meses, usando estratégias comprovadas que garantem resultados rápidos e sustentáveis."
        },
        {
            title: "Suporte Personalizado para Todas as Suas Dúvidas",
            image: "https://th.bing.com/th/id/OIG4.RYl2JWwUGNyY36Er21IK?w=1024&h=1024&rs=1&pid=ImgDetMain",
            resumeDescription: "Tire suas dúvidas com suporte especializado",
            description: "Conte com nosso suporte dedicado para responder suas dúvidas e orientar você em todas as etapas da gestão do iFood, desde o cadastro até a otimização de vendas."
        },
        {
            title: "Monitoramento Constante do Desempenho no iFood",
            image: "https://th.bing.com/th/id/OIG4.cTzMcsEs2sWoi4wjS4y9?pid=ImgGn",
            resumeDescription: "Acompanhamento em tempo real do desempenho",
            description: "Monitoramos de perto o desempenho do seu restaurante no iFood, analisando métricas de vendas, avaliações e feedbacks, para que você saiba onde melhorar e como crescer."
        },
        {
            title: "Feedback Semanal com Ações de Melhoria",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Relatório semanal com insights para melhorias",
            description: "Receba feedbacks semanais detalhados com orientações sobre ajustes necessários para maximizar o potencial de vendas, melhorar sua presença no iFood e superar seus concorrentes."
        },
        {
            title: "Criação de Promoções Estratégicas e Rentáveis",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Promoções que aumentam vendas sem sacrificar o lucro",
            description: "Desenvolvemos promoções inteligentes que atraem mais clientes, aumentando seu volume de vendas, mas sempre preservando sua margem de lucro e garantindo sustentabilidade."
        },
        {
            title: "Relatório Mensal com Análise Completa de Resultados",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Relatório mensal detalhado de desempenho",
            description: "Todo mês você receberá um relatório detalhado com análise de desempenho, métricas de crescimento e sugestões práticas para manter o ritmo de evolução das suas vendas no iFood."
        },
        {
            title: "Otimização de Precificação para Maximizar Lucros",
            image: "https://th.bing.com/th/id/OIG4.M23.KcT75BeI7YCml_K_?pid=ImgGn",
            resumeDescription: "Preços ajustados para mais vendas e maior lucro",
            description: "Ajustamos sua precificação para que você venda mais sem comprometer a rentabilidade. Nossas estratégias garantem que seus preços sejam competitivos e lucrativos."
        }
    ]);



    return (
        <section className="products">
            <h2>Nossa Gestão Inclui:</h2>
            <Carrossel products={products} />
        </section>
    );
}

export default WeOffer;
