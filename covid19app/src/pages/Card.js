import React from 'react';
import '../App.css'; 
import NumberFormat from 'react-number-format';

//bagian untuk global & indonesia
const Card = ({nama, nilai}) =>{
    return (
        <div className="card-container">
            <p>{nama}</p>
            <p>{nilai}</p>    
        </div>
    )}

    

export default Card;
