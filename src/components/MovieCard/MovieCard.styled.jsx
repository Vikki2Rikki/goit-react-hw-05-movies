import styled from 'styled-components';

export const SectionCard = styled.section`
  display: flex;
  gap: 40px;
  padding: 15px 30px 15px 30px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const ContainerPoster = styled.div`
  max-width: 340px;
  height: auto;
  flex-basis: 50%;
`;

export const ContainerInfo = styled.div`
  font-family: sans-serif;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 15px;
`;
export const ScoreTitle = styled.h4`
  margin-bottom: 20px;
`;
export const AboutMovieTitle = styled.h3`
  margin-bottom: 10px;
`;
export const AboutMovie = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
`;
export const GenresTitle = styled.h3`
  margin-bottom: 15px;
`;

export const GenresText = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
`;
