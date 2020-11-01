import React from 'react';
import styles from './Hotel.css';

const hotel = (props) => {

    return (<div className={styles.card}>
                <div className={styles.hotel_image}>
                    <img src={props.source} alt={props.name}/>
                </div>
                <div className={styles.hotel_description}>
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                    <p>{props.distance}</p>
                    <p>{props.rate}</p>
                </div>
           </div>)
};

export default hotel;