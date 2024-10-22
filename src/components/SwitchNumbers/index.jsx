import React, { useState, useEffect } from 'react';

const numbers = [
    '+5581997420369',
    '+5581985967343',
    '+5581993150819'
];


function SwitchNumbers() {
    const [currentNumber, setCurrentNumber] = useState(numbers[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNumber((previousNumber) => {
                const currentIndex = numbers.indexOf(previousNumber);
                const nextIndex = (currentIndex + 1) % numbers.length;
                return numbers[nextIndex];
            });
        }, 5000); // Change number every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return currentNumber;
}

export default SwitchNumbers;
