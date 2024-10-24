import './style.css';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Modal from '../../components/Modal/index';
import Product from '../../components/Product/index';
import WeOffer from '../../components/WeOffer/index';
import BeforeAndAfter from '../../components/BeforeAndAfter/index';
import PromotionBanner from '../../components/PromotionBanner/index';
import Result from '../../components/Result/index';


function Main() {

    return (
        <>
            <div className='container'>
                <Header />
                <div>
                    <Result />
                    <Product />
                    <WeOffer />
                    <BeforeAndAfter />
                    <PromotionBanner />
                </div>
                <Footer />
                <Modal />
            </div>
        </>
    )
}

export default Main
