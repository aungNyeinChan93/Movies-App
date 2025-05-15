import React from 'react';
import SingleCard from './movie/SingleCard';
import Spinner from './base/Spinner';

const Movies = ({ movies, isLoading, isError }) => {
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
                {movies?.length ? (<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 '>
                    {movies?.map(movie => {
                        return <SingleCard key={movie.id} {...movie} />
                    })}
                </section>) : (<div>
                    <p className='text-4xl text-center text-bold text-gradient'> No Match Found! ❌❌
                        <span className='text-sm' > 🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Lorem ipsum dolor sit amet, consec
                            tetur adipisicing elit. Deleniti, animi. Et ea fugit laudantium accusamus q
                            uia reprehenderit nostrum rem voluptate.
                        </span>
                    </p>
                </div>)}
            </section>
        </React.Fragment>
    );
};

export default Movies;

