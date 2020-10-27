import React from 'react';
import './Hotel.css';

const hotel = (props) => {

    return (<div className='card'>
                <div className='hotel_image'>
                    <img src={props.source} alt={props.name}/>
                </div>
                <div className='hotel_description'>
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                    <p>{props.distance}</p>
                    <p>{props.rate}</p>
                </div>
           </div>)
};

export default hotel;