import React from 'react';
import SingleCard from './movie/SingleCard';
import Spinner from './base/Spinner';

const Movies = ({ movies, isLoading, isError }) => {
    // console.log(movies);
    return (
        <React.Fragment>
            <section className='w-full min-h-screen bg-cyan-200  '>
                <p className=' text-gradient p-4 text-3xl font-bold mx-10 font-mono'>All Movies</p>
                {isLoading ? (
                    <div className='flex w-full h-screen justify-center items-center'>
                        <Spinner />
                    </div>
                ) : (null)}
                {isError && <div>
                    <p className='text-gradient-100 font-bold text-center p-4 text-xl'>{isError}</p>
                </div>}
                {movies?.length && (<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 '>
                    {movies?.map(movie => {
                        return <SingleCard key={movie.id} {...movie} />
                    })}
                </section>)}
            </section>
        </React.Fragment>
    );
};

export default Movies;