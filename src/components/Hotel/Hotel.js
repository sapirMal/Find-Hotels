import React from 'react';
import style from './Hotel.css';
import Suggestions from './Suggestions/Suggestions';

const hotel = (props) => {
    const lowest = {
        price: 340,
        website: 'rr'
    }
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
                <Suggestions
                    lowestWebsite={lowest}
                />
           </div>)
};

export default hotel;