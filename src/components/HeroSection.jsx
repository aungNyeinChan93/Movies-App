import React from 'react';

const HeroSection = () => {
    return (
        <React.Fragment>
            <img src="hero_2.jpg" alt="" className='w-full object-cover' />
            <p className='text-gradient text-4xl text-center p-4 hover:text-red-400 font-bold mt-4 '>
                Find Your <span className='text-gradient-100'>Movies</span> dolor sit amet consectetur adipis
            </p>
        </React.Fragment>
    );
};

export default HeroSection;

