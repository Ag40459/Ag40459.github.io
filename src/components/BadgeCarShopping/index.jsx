import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UseUser from '../../hooks/useUser';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



export default function BadgeCarShopping() {
    const { listCarShopping, openModalCarShopping, setOpenModalCarShopping } = UseUser();

    let numberPurchases = listCarShopping.length;
    if (!numberPurchases) {
        numberPurchases = 0;
        return
    }
    function handleClickOpenModalCarShopping() {
        return setOpenModalCarShopping(!openModalCarShopping)
    }


    return (
        <div
            onClick={handleClickOpenModalCarShopping}
            style={{ cursor: "pointer" }}>
            <IconButton aria-label="cart">
                <StyledBadge
                    badgeContent={numberPurchases}
                    color="success">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </div>
    );
}
