import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import Modal from '../Modal';

function Carrossel({ products }) {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={!isHovered}
                interval={3000}
                infiniteLoop
                centerMode
                centerSlidePercentage={33.33}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {products && products.map((product, index) => (
                    <div key={index} className="product-card" onClick={() => setSelectedProduct(product)}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </Carousel>
            {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </>
    );
}

export default Carrossel;
