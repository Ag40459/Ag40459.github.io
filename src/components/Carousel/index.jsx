import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import Modal from '../Modal';

function Carrossel({ products }) {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={!isHovered}
                interval={3000}
                infiniteLoop
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                centerMode={windowWidth > 768}
                centerSlidePercentage={windowWidth > 768 ? 33.33 : 100}
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
            {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </>
    );
}

export default Carrossel;
