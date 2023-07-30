import Loader from 'components/Loader/Loader';
import MoviesDayList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getDayTrendingMovie } from 'services/apiservices';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    const getListDay = async () => {
      try {
        const { results } = await getDayTrendingMovie(1);
        if (results.length === 0) {
          setStatus('notFound');
        }
        setMovies(results);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    };
    getListDay();
  }, []);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesDayList movies={movies} />}
      {status === 'notFound' && <p>We don't have any movie.</p>}
      {status === 'rejected' && <div>Sorry! Something went wrong!</div>}
    </>
  );
};

export default HomePage;
