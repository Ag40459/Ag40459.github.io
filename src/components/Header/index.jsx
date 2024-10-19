import Logo from '../../assets/logoEvolSimples.jpeg'
import './style.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <div className='ContainerHeader'>
                <h1>GESTÃO DE IFOOD</h1>
                <h2>UMA PRESTAÇÃO DE SERVIÇO</h2>
                <h3>GARANTIA DE RESULTADO</h3>
                <a href="https://wa.me/+5581997420369"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer">Quero Alavancar Meu Ifood</a>
            </div>
        </header>
    )
}

export default Header;
