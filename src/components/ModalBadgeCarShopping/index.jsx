import Close from '../../assets/close.png';
import UseUser from '../../hooks/useUser';
import './style.css';


export default function ModalBadgeCarShopping() {
    const { listCarShopping, removeListCarShopping, openModalCarShopping, setOpenModalCarShopping, removeNumberPurchases } = UseUser();
    let idCarShopping = 0;

    function handleRemoveListCarShopping(e) {
        if (e.target.innerHTML === 'Limpar Pedidos') {
            removeListCarShopping();
            removeNumberPurchases();
            return setOpenModalCarShopping(!openModalCarShopping);
        }
        return setOpenModalCarShopping(!openModalCarShopping);
    }

    return (
        <div className='container_modalBadge'>
            <div className='container_modalBadge_card'>
                <img
                    onClick={handleRemoveListCarShopping}
                    src={Close} alt="Incone fechar" />
                <strong>Itens do pedido:</strong>

                {listCarShopping &&
                    listCarShopping.map((carShopping) => {
                        return (
                            <ul
                                key={`${carShopping.id}+${idCarShopping++}`}
                            >
                                <div className='container_modalBadge_card_list'>
                                    <li>{carShopping.title}</li>
                                    <strong>R$ {(carShopping.value).toFixed(2)}</strong>
                                </div>

                            </ul>
                        )
                    })

                }

                <button
                    onClick={handleRemoveListCarShopping}
                >Limpar Pedidos</button>
            </div>

        </div>
    )
}

