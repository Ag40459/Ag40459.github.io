import './style.css';
import Modal from '../../components/Modal/index'
import React, { useState } from 'react';


function Result() {
    const clients = [
        { name: 'Cliente 1', image1: '../../src/assets/Bistro1.png', image2: '../../src/assets/Bistro2.png' },

        { name: 'Cliente 2', image1: '../../src/assets/DeliciaDiariaSorveteria1.png', image2: '../../src/assets/DeliciaDiariaSorveteria2.png' },

        { name: 'Cliente 3', image1: '../../src/assets/MarmitariaGrill1.png', image2: '../../src/assets/MarmitariaGrill2.png' },

        { name: 'Cliente 4', image1: '../../src/assets/RestauranteVania1.png', image2: '../../src/assets/RestauranteVania2.png' },

        { name: 'Cliente 5', image1: '../../src/assets/PastelariaFamilia1.png', image2: '../../src/assets/PastelariaFamilia2.png' },
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    return (
        <div className="result-container">
            <h2>Resultados</h2>
            <div className="carousel">
                {clients.map((client, index) => (
                    <div key={index} className="client-pair">
                        <img src={client.image1} alt={`${client.name} 1`} className="client-image" onClick={() => openModal(client.image1)} />
                        <img src={client.image2} alt={`${client.name} 2`} className="client-image" onClick={() => openModal(client.image2)} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <Modal image={selectedImage} onClose={closeModal} />
            )}
        </div>
    );
}

export default Result;
