import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditMovie } from 'services/apiservices';
import noPhoto from '../../images/no-photo.jpg';
import Loader from 'components/Loader/Loader';
import {
  CastSection,
  CastList,
  CastItem,
  InfoContainer,
  InfoName,
  InfoCharacter,
} from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async id => {
      setStatus('pending');
      try {
        const { cast } = await getCreditMovie(id);
        if (cast.length === 0) {
          setStatus('notFound');
          return;
        }
        setCast(cast);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <CastSection>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <CastList>
          {cast.map(({ credit_id, name, profile_path, character }) => (
            <CastItem key={credit_id}>
              <img
                src={
                  profile_path
                    ? [`https://image.tmdb.org/t/p/w500${profile_path}`]
                    : noPhoto
                }
                alt={name}
                width={120}
              />
              <InfoContainer>
                {name && <InfoName>{name}</InfoName>}
                {character && (
                  <InfoCharacter>Character: {character}</InfoCharacter>
                )}
              </InfoContainer>
            </CastItem>
          ))}
        </CastList>
      )}
      {status === 'notFound' && <p>We don't have any cast for this movie.</p>}
      {status === 'rejected' && (
        <div>Sorry! Something went wrong! Enter another request.</div>
      )}
    </CastSection>
  );
}
