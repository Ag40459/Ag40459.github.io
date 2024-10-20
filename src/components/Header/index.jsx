import Logo from '../../assets/logoEvolSimples.jpeg';
import './style.css';

function Header() {
    return (
        <header>
            <div className='ContainerHeader'>
                <img src={Logo} alt="Logo" />
                <div className='ContainerHeaderText'>
                    <h1>GESTÃO DE IFOOD</h1>
                    <h2>UMA PRESTAÇÃO DE SERVIÇO</h2>
                    <h3>COM GARANTIA DE RESULTADO OU SEU</h3>
                    <h3 style={{ color: 'red' }}> DINHEIRO DE VOLTA</h3>
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
