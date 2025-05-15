import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import Movies from './components/Movies';
import useGetMovies from './hooks/useGetMovies';

const App = () => {
    const [search, setSearch] = useState('');
    const API_BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const { data: { results: movies }, isError, isLoading } = useGetMovies(`${API_BASE_URL}/movie/popular`, API_KEY);

    return (
        <React.Fragment>
            <div className='w-full  bg-dark-100  rounded text-white'>
                <header>
                    <HeroSection />
                </header>
                <main>
                    <SearchSection search={search} setSearch={setSearch} />
                    <Movies movies={movies} isError={isError} isLoading={isLoading} />
                </main>
            </div>
        </React.Fragment>
    );
};

export default App;