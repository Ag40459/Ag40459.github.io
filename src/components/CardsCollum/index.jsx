import UseUser from '../../hooks/useUser';
import './style.css';

export default function CardsCollum() {
    const { openModalProduct, setOpenModalProduct, listProductModal, setProductSelect, listProduct } = UseUser()
    function handleSelectProduct(product) {
        setOpenModalProduct(!openModalProduct);
        return setProductSelect(product);
    }
    return (
        <>
            {listProductModal.map((product) => {
                return (
                    <div className='container_cardsCollum_purchase'
                        key={product.id}
                        onClick={() => handleSelectProduct(product)}>
                        <div className='container_cardsCollum_purchase_img'>
                            <img
                                src={product.img} />
                        </div>
                        <div className='container_cardsCollum_purchase_details'>
                            <p>{product.title}</p>
                        </div>
                        <div className='container_cardsCollum_purchase_price'>
                            <strong>R$ {(((product.value) * 0.8).toFixed(2)).replace('.', ',')}</strong>
                            <span>R$ {(product.value).toFixed(2).replace('.', ',')}</span>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

