import styled from 'styled-components';

export const CastSection = styled.section`
  margin-top: 25px;
  padding-left: 15;
  padding-right: 15px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  list-style: none;
`;
export const CastItem = styled.li`
  flex-basis: calc((100% - 6 * 12px) / 7);
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const InfoContainer = styled.div`
  margin-top: 8px;
  padding-left: 5px;
  padding-bottom: 5px;
  font-weight: 500;
  line-height: 1.5;
`;

export const InfoName = styled.p`
  font-weight: 700;
  line-height: 1.5;
`;

export const InfoCharacter = styled.p`
  margin-top: 5px;
  font-weight: 500;
  line-height: 1.5;
`;
