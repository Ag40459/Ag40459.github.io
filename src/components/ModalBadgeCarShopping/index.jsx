import './style.css';
import UseUser from '../../hooks/useUser';


export default function ModalBadgeCarShopping() {
    const { listCarShopping, removeListCarShopping } = UseUser();

    return (
        <div className='container_modalBadge'>
            <div className='container_modalBadge_card'>
                <strong>Itens do pedido:</strong>

                {listCarShopping &&
                    listCarShopping.map((carShopping) => {
                        return (
                            <ul
                                key={carShopping.id}
                            >
                                <li>{carShopping.title}</li>
                            </ul>

                        )
                    })
                }


            </div>

        </div>
    )
}

