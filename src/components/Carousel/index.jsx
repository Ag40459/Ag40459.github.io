import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import Modal from '../Modal/index';

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
                centerSlidePercentage={33.33}
                enterMode={window.innerWidth > 768}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {products && products.map((product, index) => (
                    <div key={index} className="product-card"
                        onClick={() => setSelectedProduct(product)}>
                        <h2 style={{ color: "red" }}>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <h6>{product.resumeDescription}</h6>

                    </div>
                ))}
            </Carousel>
            {selectedProduct && <Modal product={selectedProduct}
                onClose={() => setSelectedProduct(null)} />}
        </>
    );
}

export default Carrossel;
