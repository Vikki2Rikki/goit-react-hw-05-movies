import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/apiservices';
import {
  ReviewsSection,
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ReviewsTitle,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const MovieReviews = async id => {
      setStatus('pending');
      try {
        const { results } = await getReviewsMovie(id);
        if (results.length === 0) {
          setStatus('notFound');
          return;
        }
        setReviews(results);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    };
    MovieReviews(movieId);
  }, [movieId]);

  return (
    <ReviewsSection>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsTitle>Autor: {author}</ReviewsTitle>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}

      {status === 'notFound' && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {status === 'rejected' && (
        <div>Sorry! Something went wrong! Enter another request.</div>
      )}
    </ReviewsSection>
  );
};

export default Reviews;
