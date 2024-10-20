import Logo from '../../assets/logoEvolSimples.jpeg';
import './style.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <div className='ContainerHeader'>
                <h1>GESTÃO DE IFOOD</h1>
                <h2>UMA PRESTAÇÃO DE SERVIÇO</h2>
                <h3>COM GARANTIA DE RESULTADO</h3>
                <h3 style={{ color: 'red' }}>OU SEU DINHEIRO DE VOLTA</h3>

                <a
                    href="https://wa.me/+5581997420369"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer">
                    AUMENTE SUAS VENDAS!!
                </a>
            </div>
        </header>
    )
}

export default Header;