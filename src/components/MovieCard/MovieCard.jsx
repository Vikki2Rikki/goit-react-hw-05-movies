import React from 'react';
import noPhoto from '../../images/no-photo.jpg';
import {
  SectionCard,
  ContainerPoster,
  ContainerInfo,
  MovieTitle,
  ScoreTitle,
  AboutMovieTitle,
  AboutMovie,
  GenresTitle,
  GenresText,
} from './MovieCard.styled';

const MovieCard = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <SectionCard>
      <ContainerPoster>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noPhoto
          }
          alt={title}
        />
      </ContainerPoster>
      <ContainerInfo>
        <MovieTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieTitle>
        <ScoreTitle>User score : {Math.round(vote_average * 10)}%</ScoreTitle>
        <AboutMovieTitle>Owerview</AboutMovieTitle>
        <AboutMovie>{overview}</AboutMovie>
        <GenresTitle>Genres</GenresTitle>
        <GenresText>{genres.map(genre => genre.name).join(', ')}</GenresText>
      </ContainerInfo>
    </SectionCard>
  );
};

export default MovieCard;
