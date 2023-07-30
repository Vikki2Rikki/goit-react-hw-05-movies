import GoBack from 'components/GoBack/GoBack';
import InfoLink from 'components/InfoLink/InfoLink';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getSearchByIdMovie } from 'services/apiservices';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getUserById = async () => {
      setStatus('pending');
      try {
        const movie = await getSearchByIdMovie(movieId);
        setMovie(movie);
        setStatus('resolved');
        //setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
        //setError(error.message);
        //setIsLoading(false);
      }
    };
    getUserById(movieId);
  }, [movieId]);

  return (
    <div>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <Link to={backLinkLocationRef.current}>
          <GoBack />
        </Link>
      )}

      {status === 'resolved' && <MovieCard movie={movie} />}
      <InfoLink />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {status === 'rejected' && (
        <div>Sorry! Something went wrong! Enter another request.</div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
