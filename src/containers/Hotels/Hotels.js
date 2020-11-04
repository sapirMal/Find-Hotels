import React from 'react';
import Hotel from '../../components/Hotel/Hotel';

const hotels = (props) => {
    return props.hotels.map((hotel, index) => {
        return (
            <Hotel
                key={hotel.id}
                source={hotel.src.hotelPic}
                name={hotel.name}
                desc={hotel.desc}
                distance={hotel.distance}
                rate={hotel.rate}
            />
        );
    })
};

export default hotels;