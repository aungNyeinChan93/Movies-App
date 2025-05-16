import React from 'react';

const SingleCard = ({ id, poster_path, original_title, overview, popularity, vote_average, release_date }) => {
    return (
        <React.Fragment>
            <a href={id} className="group relative block bg-black ">
                <img
                    alt=""
                    src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : null}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <div className='p-1 bg-gradient-100 rounded-3xl my-2 flex items-center w-fit px-3'>
                        <p>⭐</p>
                        <span className='text-lg font-mono text-white '>  {vote_average.toFixed(1)}</span>
                        <span className='ms-3'> 📅 {release_date ? release_date.split('-')[0] : 'N/A'}</span>
                    </div>
                    <p className="text-md font-medium tracking-widest text-pink-500 uppercase"> popularity - {popularity} </p>

                    <p className="text-2xl font-bold text-white sm:text-2xl">{original_title}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                {overview.substring(0, 100) + ' ... '}
                            </p>
                        </div>
                    </div>
                </div>
            </a>

        </React.Fragment>
    );
};

export default SingleCard;