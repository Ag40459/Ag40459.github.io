import React, { useState, useEffect } from 'react';
import './style.css';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import Modal from '../../components/Modal/index';
import Product from '../../components/Product/index';
import WeOffer from '../../components/WeOffer/index';
import BeforeAndAfter from '../../components/BeforeAndAfter/index';
import PromotionBanner from '../../components/PromotionBanner/index';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function Main() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('chat message');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            socket.emit('chat message', input);
            setInput('');
        }
    };

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <>
            <div className='container'>
                <Header />
                <div>
                    <Product />
                    <WeOffer />
                    <BeforeAndAfter />
                    <PromotionBanner />
                </div>
                <Footer />
                <Modal />
                <div className="chat-button" onClick={toggleChat}>
                    <div className="chat-icon"></div>
                </div>
                {showChat && (
                    <div className="chat-window active">
                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Digite uma mensagem..."
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Main;
