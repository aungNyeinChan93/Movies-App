import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import Movies from './components/Movies';
import useGetMovies from './hooks/useGetMovies';
import { useDebounce } from 'react-use';

const App = () => {
    const [search, setSearch] = useState('');
    const [debounceSearch, setDebounceSearch] = useState('');

    const API_BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useDebounce(() => setDebounceSearch(search), 1000, [search]);

    let end_point = `${API_BASE_URL}/movie/popular`;
    if (debounceSearch.length) {
        end_point = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(search)}`
    }

    const { data: { results: movies }, isError, isLoading } = useGetMovies(end_point, API_KEY);

    return (
        <React.Fragment>
            <div className='w-full !bg-dark-100 rounded text-white '>
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