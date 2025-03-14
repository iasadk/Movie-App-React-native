export const TMDB_CONFIG = {
    base_url: 'https://api.themoviedb.org/3',
    api_key: process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN,
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `/search/movie?query=${encodeURIComponent(query)}` : '/discover/movie?sort_by=popularity.desc';

    const response = await fetch(`${TMDB_CONFIG.base_url}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data.results
}

export const fetchMovieDetail = async (movieId: string): Promise<MovieDetails> => {
    const endpoint = `/movie/${movieId}?api_key=${TMDB_CONFIG.api_key}`;

    const response = await fetch(`${TMDB_CONFIG.base_url}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data
}