import Logo from '../../assets/logoEvolSimples.jpeg';
import './style.css';

function Header() {
    return (
        <header>
            <div className='ContainerHeader'>
                <img src={Logo} alt="Logo" />
                <div className='ContainerHeaderText'>
                    <h1>FALE COM UM ESPECIALISTA EM DELIVERY PARA IFOOD</h1>
                    <h2 style={{ color: "black" }}>TIRE SUAS DÚVIDAS E RECEBA INSIGHTS PODEROSOS PARA DESTRAVAR DE VEZ AS VENDAS DA SUA LOJA NO IFOOD.</h2>
                    <h3 >GARANTIA DE RESULTADO OU SEU  DINHEIRO DE VOLTA</h3>
                </div>
                {/* 
                <a
                    href="https://wa.me/+5581997420369"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer">
                    AUMENTE SUAS VENDAS!!
                </a> */}
            </div>
        </header>
    )
}

export default Header;
