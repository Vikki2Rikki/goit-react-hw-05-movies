import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  InfoLinkSection,
  InfoList,
  InfoTitle,
  InfoItem,
} from './InfoLink.styled';

const InfoLink = () => {
  return (
    <InfoLinkSection>
      <InfoTitle>Additoinal information</InfoTitle>
      <InfoList>
        <InfoItem>
          <NavLink to="cast">Cast</NavLink>
        </InfoItem>
        <InfoItem>
          <NavLink to="reviews">Reviews</NavLink>
        </InfoItem>
      </InfoList>
    </InfoLinkSection>
  );
};

export default InfoLink;
