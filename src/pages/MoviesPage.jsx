/* eslint-disable no-undef */
import Loader from 'components/Loader/Loader';
import MoviesDayList from 'components/MovieList/MovieList';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchQueryMovie } from 'services/apiservices';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';

  useEffect(() => {
    !searchQuery && setSearchParams({});
  }, [searchQuery, setSearchParams]);

  const getSearchMovie = async query => {
    if (searchQuery === null) return;

    setStatus('pending');
    try {
      const { results } = await getSearchQueryMovie(query);
      // if (results.length === []) {
      //   setStatus('notFound');
      // }
      setMovies(results);
      setStatus('resolved');
    } catch (error) {
      console.log(error.message);
      setStatus('rejected');
    }
  };

  return (
    <div>
      <SearchMovie
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
        getSearchMovie={getSearchMovie}
      />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesDayList movies={movies} />}

      {status === 'rejected' && (
        <div>Sorry! Something went wrong! Enter another request.</div>
      )}
    </div>
  );
};

export default MoviesPage;
