import React from 'react';
import style from './Hotel.css';

const hotel = (props) => {

    return (<div className={style.card}>
                <div className={style.hotel_image}>
                    <img src={props.source} alt={props.name}/>
                </div>
                <div className={style.hotel_description}>
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                    <p>{props.distance}</p>
                    <p>{props.rate}</p>
                </div>
           </div>)
};

export default hotel;