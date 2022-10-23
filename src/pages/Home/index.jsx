import Cards from '../../components/Cards';
import CardsCollum from '../../components/CardsCollum';
import ModalCard from '../../components/ModalCardOrigin';
import UseUser from '../../hooks/useUser';
import SignIn from '../../pages/SignIn';
import Register from '../../pages/SignUP';
import './style.css';

export default function Home() {


  const { openModalProduct, openSignIn, openRegister } = UseUser()

  return (
    <div className="container_home">
      {openModalProduct &&
        <ModalCard />
      }
      {openSignIn &&
        <SignIn />
      }
      {openRegister &&
        <Register />
      }
      <div className='container_cards'>
        <strong
          className='container_cards_promotion_strong'>
          Promoções de {'domingo'}:
        </strong>
        <div className='container_cards_promotion'>
          <CardsCollum />
        </div>
        <Cards />
      </div>

    </div>
  )
}