import { useEffect, useState } from 'react';
import Close from '../../assets/close.png';
import UseUser from '../../hooks/useUser';
import './style.css';


export default function ModalBadgeCarShopping() {
    const { listCarShopping, setListCarShopping, removeListCarShopping, openModalCarShopping, setOpenModalCarShopping, removeNumberPurchases } = UseUser();
    const [totalCarShopping, setTotalCarShopping] = useState(0);
    let idCarShopping = 100;

    function handleClick(e) {
        if (e.target.innerHTML === 'Limpar Pedidos') {
            removeListCarShopping();
            removeNumberPurchases();
            return setOpenModalCarShopping(!openModalCarShopping);
        }
        return setOpenModalCarShopping(!openModalCarShopping);
    }
    function handleClickDeleteProductSelect(e) {
        const listCarShop = [{ ...listCarShopping }];
        const newList = listCarShop.filter(carShop => carShop.idCarShopping !== e.idCarShopping);
        return setListCarShopping(newList);

    }
    useEffect(() => {
        if (listCarShopping) {
            const sum = listCarShopping.reduce((a, b) => a + b.value, 0);
            return setTotalCarShopping(sum);
        }
    }, [listCarShopping]);

    return (
        <div className='container_modalBadge'>
            <div className='container_modalBadge_card'>
                <button
                    onClick={handleClick}
                >Limpar Pedidos</button>
                <img
                    style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                    src={Close} alt="Incone fechar" />
                <strong>Itens do pedido:</strong>
                <div
                    className='container_modalBadge_card_description'
                >
                    {listCarShopping &&
                        listCarShopping.map((carShopping) => {
                            return (
                                <ul
                                >
                                    <div className='container_modalBadge_card_list'>
                                        <li>{carShopping.title}</li>
                                        <div
                                            className='container_modalBadge_card_list_price'
                                            style={{ cursor: 'pointer' }}>
                                            <strong>R$ {(carShopping.value).toFixed(2).replace('.', ',')}</strong>
                                            <span
                                                key={`${carShopping.id + (idCarShopping++)}`}
                                                accessKey={`${carShopping.id}+${idCarShopping++}`}
                                                onClick={(e) => handleClickDeleteProductSelect(e, carShopping)}
                                                style={{ color: 'red', cursor: 'pointer' }}>X</span>
                                        </div>
                                    </div>

                                </ul>
                            )
                        })

                    }
                    <span
                        id='totalBadge'>
                        Total R$: {totalCarShopping.toFixed(2).replace('.', ',')}
                    </span>
                </div>
                <div className='container_modalBadge_card_button'>

                    <button
                        onClick={handleClick}
                    >Confirmar Pedido</button>


                </div>
            </div>

        </div>
    )
}

