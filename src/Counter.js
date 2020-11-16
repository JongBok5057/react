import React,{useState} from 'react';

const Counter = () => {
    const [number,setNumber] = useState(0);
    const onIncerment = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrement = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncerment}>+1</button>
            <button onClick={onDecrement}>-1</button>
        </div>
    );
};

export default Counter;