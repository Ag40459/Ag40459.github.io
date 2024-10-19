import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import Modal from './Modal';

function Carrossel({ products }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={!isHovered}
            interval={3000}
            infiniteLoop
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {products && products.map((product, index) => (
                <Modal key={index} product={product} />
            ))}
        </Carousel>
    );
}

export default Carrossel;
