import { Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { useEffect } from 'react';
import Close from '../../assets/close.png';
import UseUser from '../../hooks/useUser';
import './style.css';

export default function ModalCard() {
    const { openModalProduct, setOpenModalProduct, productSelect, setTopPosition, topPosition, listCarShopping, setListCarShopping, setNumberPurchases } = UseUser()
    useEffect(() => {
        setTopPosition(document.documentElement.scrollTop);
    }, [openModalProduct]);

    useEffect(() => {
    }, [listCarShopping])

    const handleClickAddListCarShopping = () => {
        if (!listCarShopping) {
            const newList = productSelect;
            setListCarShopping([newList]);
            return setOpenModalProduct(!openModalProduct);
        }
        const list = listCarShopping;
        const newProduct = { ...productSelect };
        const numberPurchases = list.push(newProduct);
        setNumberPurchases(numberPurchases);
        setListCarShopping(list);
        return setOpenModalProduct(!openModalProduct);
    };

    useEffect(() => {
        document.querySelector("body").style.overflowY = 'hidden';

        return () => {
            document.querySelector("body").style.overflowY = 'auto';
        }
    }, []);

    return (
        <div
            style={{ top: topPosition }}
            className='container_modalCard'>
            <div
                className='container_modalCard_card'
            >
                <Card sx={{ width: '95%', height: '95%' }}>
                    <CardHeader
                        action={
                            <IconButton
                                onClick={() => setOpenModalProduct(!openModalProduct)}
                                aria-label="settings">
                                <img
                                    src={Close}
                                    alt="incone fechar" />
                            </IconButton>
                        }
                        title={productSelect.title}
                        subheader="September 14, 2016"      //INSERIR CROCK
                    />
                    <CardMedia
                        sx={{ backgroundSize: 'cover', border: 'solid 1px black', width: '100%' }}
                        component="img"
                        height="200"
                        image={productSelect.img}
                        alt="Prato Selecionado"
                    />
                    <CardContent>
                        {/* <Typography
                        sx={{ fontSize: '1.6rem' }}
                        variant="body2"
                        color="text.secondary">
                        {productSelect.description}
                    </Typography> */}
                    </CardContent>
                    <div className='container_modalCard_description'>
                        {productSelect.description}
                    </div>
                    <div className='container_modalCard_botton'>
                        <div className='container_modalCard_botton_rating'>
                            <strong>O que achou do nosso prato ?</strong>
                            <Rating name="size-large" defaultValue={5} size="large" />
                        </div>
                        <button
                            onClick={handleClickAddListCarShopping}
                        >
                            Adicionar R$ {(productSelect.value).toFixed(2).replace('.', ',')}
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
