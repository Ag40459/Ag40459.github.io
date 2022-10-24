import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logoNinacai.jpeg';
import CustonMenu from '../../components/CustonMenu';
import UseUser from '../../hooks/useUser';
import BadgeCarShopping from '../../components/BadgeCarShopping';
import './style.css';

export default function Header() {
    const { token, openSignIn, setOpenSignIn, openRegister, setOpenRegister, user } = UseUser();

    function handleClick(e) {
        if (e.target.className === 'container_header_signIn') {
            return setOpenSignIn(!openSignIn);
        }
        return setOpenRegister(!openRegister);
    }

    return (
        <>
            <div className='container_header'>

                <div className='container_header_menu'>
                    <img src={Logo} alt="Logo Marca" />
                </div>

                <a
                    onClick={handleClick}
                    style={{ textDecoration: 'none' }}
                    className='container_header_signIn'>
                    {!token && 'Login'}
                </a>
                <a
                    onClick={handleClick}
                    style={{ textDecoration: 'none' }}
                    className='container_header_signUp'>
                    {!token && 'Cadastre-se'}
                </a>
                {/* <BadgeCarShopping /> */}
                <div className='container_header_avatar'>
                    {token &&
                        <>
                            <CustonMenu />
                            <strong>{user.nome}</strong>
                            <BadgeCarShopping />
                        </>
                    }
                </div>
            </div>
            <div className='contente-page'>
                <Outlet />
            </div>
        </>
    )
}