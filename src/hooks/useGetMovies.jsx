import { useEffect, useState } from "react"

const useGetMovies = (url, key = null,) => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState('');

    const getMovies = async (url, key) => {
        try {
            setLoading(true)
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    accept: 'Application/json',
                    Authorization: `Bearer ${key}`,
                }
            })
            if (!response.ok) {
                throw new Error('Movies API fetching was error occour!')
            }

            const result = await response.json();

            if (result.Response === false) {
                setError(result.Error || 'Fetching Error');
                setData([]);
                return
            }

            setData(result);
        } catch (error) {
            console.error(error);
            setError(`Fetching movies Fail : ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMovies(url, key);
    }, [url, key])

    return { data, isLoading, isError, }
};

export default useGetMovies;