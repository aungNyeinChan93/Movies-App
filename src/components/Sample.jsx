import React from 'react';
import Card from './Card';

const Sample = () => {
    return (
        <React.Fragment>
            <section className='max-w-[800px] mx-auto mt-10 mb-1 h-screen '>
                <p className='bg-gradient-to-l from-orange-600 to-cyan-600 text-3xl font-bold bg-clip-text text-transparent text-center'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <Card >Avator</Card>
                <Card >Marvel</Card>
            </section>
        </React.Fragment>
    );
};

export default Sample;