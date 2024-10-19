import './style.css';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Modal from '../../components/Modal/index';
import Product from '../../components/Product/index';

function Main() {

    return (
        <>
            <div className='container'>
                <Header />
                <div>
                    <Product />
                </div>
                <Footer />
                <Modal />
            </div>
        </>
    )
}

export default Main
