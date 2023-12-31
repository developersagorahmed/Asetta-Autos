import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import NewArrivalsCar from './NewArrivalsCar';
import Tittle from '../Shared/Tittle/Tittle';

const NewArrivals = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('new_arrivals.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className='mx-[240px] my-24'>
            <Tittle
                topTitle={"New Arrivals"} 
                boldblackTitle={"Let's Check Latest"} 
                boldredTitle={"Cars"}
            />
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
                {
                    cars.map(car => <NewArrivalsCar
                        key={car.id}
                        car={car}
                    />)
                }
            </div>
            <div className='text-center mt-6'>
                <button className="btn bg-[#ef1721] text-white font-medium hover:bg-[#111] duration-500">Load More</button>
            </div>
        </div>
    );
};

export default NewArrivals;