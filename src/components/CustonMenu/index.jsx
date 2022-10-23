import Register from '../../pages/SignUP';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.png';
import UseUser from '../../hooks/useUser';
import './style.css';


export default function MenuHeader() {
    const { removeToken, setOpenRegister, openRegister, removeNumberPurchases } = UseUser();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickAddAccount = (e) => {
        if (e.target.innerHTML == 'Perfil') {
            return setOpenRegister(!openRegister);
        }
        else if (e.target.innerHTML == 'Minha Conta') {
            return console.log("Minha Conta");
        }
        else if (e.target.innerHTML == 'Novo Usuário') {
            return console.log("Novo Usuário");
        }
        else if (e.target.innerHTML == 'Configurações') {
            return console.log("Configurações");
        }

        console.log("Sair");
        removeNumberPurchases()
        return removeToken();
    }
    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 1 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar
                        sx={{ width: 32, height: 32 }}
                    >
                        <img
                            style={{ width: 32 }}
                            src={profile}       //AQUI ADICIONAR IMAGEM
                            alt="Avatar" /> </Avatar>

                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar
                    />  <span
                        onClick={(e) => handleClickAddAccount(e)}
                    >
                        Perfil
                    </span>

                </MenuItem>
                <MenuItem>
                    <Avatar />  <span
                        onClick={(e) => handleClickAddAccount(e)}
                    >
                        Minha Conta
                    </span>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <span
                        onClick={(e) => handleClickAddAccount(e)}
                    >
                        Novo Usuário
                    </span>
                </MenuItem>
                <MenuItem
                >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <span
                        onClick={(e) => handleClickAddAccount(e)}
                    >
                        Configurações
                    </span>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon
                    >
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <span
                        onClick={(e) => handleClickAddAccount(e)}
                    >
                        Sair
                    </span>
                </MenuItem>
            </Menu>

        </>
    );
}
