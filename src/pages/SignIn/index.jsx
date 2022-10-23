import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseUser from '../../hooks/useUser';
import api from '../../services/api';
import './style.css';

export default function SignIn() {
    const navigate = useNavigate();
    const { email, setEmail, pass, setPass, setToken, setUser, openSignIn, setOpenSignIn, Close } = UseUser();
    const [values, setValues] = useState({
        password: false,
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        return setValues({
            showPassword: !values.showPassword,
        });
    };
    const handleClose = () => {
        return setOpenSignIn(!openSignIn)
    };
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (!email || !pass) {
                alert("Preencha todos os campos!");

                return;
            }
            const response = await api.post("/login", {
                email,
                senha: pass
            })
            const { token, usuario } = response.data;
            setUser(usuario);
            setToken(token);
            setOpenSignIn(!openSignIn);

        } catch (error) {
            return alert(error.response.data.message);

        }
        alert('Login Efetuado com Sucesso!');

        return navigate('/home');

    }

    function handleClear() {
        setEmail('');
        setPass('');
    }

    return (
        <div className='container_login'>

            <form onSubmit={handleSubmit}>
                <img
                    onClick={() => handleClose()}
                    src={Close} alt="Botão Fechar" />
                <FormControl sx={{ width: '90%', paddingTop: 1 }} variant="standard">
                    <InputLabel
                        sx={{ fontSize: '15px' }}
                    >E-mail</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                </FormControl>

                <FormControl sx={{ width: '90%', paddingTop: 2 }} variant="standard">
                    <InputLabel
                        sx={{ fontSize: '15px', marginTop: 1 }}
                    >Senha</InputLabel>
                    <Input
                        sx={{ width: '100%', marginLeft: 0 }}
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}

                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                </FormControl>

                <div className='container_login_button'>
                    <Button
                        sx={{ width: '40%' }}
                        variant="contained"
                        color="error"
                        onClick={() => handleClear()}
                    >
                        Limpar
                    </Button>
                    <Button
                        type='submit'
                        sx={{ width: '40%' }}
                        variant="contained"
                        color="success"
                    >
                        Entrar
                    </Button>

                </div>

            </form>
        </div>
    )
}