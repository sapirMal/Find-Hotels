import React from 'react';
import Hotel from './Hotel/Hotel';

const hotels = (props) => {
    return props.hotels.map((hotel, index) => {
        console.log(hotel.src);
        return (
            <Hotel
                key={hotel.id}
                source={hotel.src}
                name={hotel.name}
                desc={hotel.desc}
                distance={hotel.distance}
                rate={hotel.rate}
            />
        );
    })
};

export default hotels;