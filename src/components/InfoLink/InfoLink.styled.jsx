import styled from 'styled-components';

export const InfoLinkSection = styled.section`
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const InfoTitle = styled.h2`
  margin-left: 90px;
  margin-bottom: 15px;
  font-family: sans-serif;
  text-transform: capitalize;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 90px;
  list-style: none;
`;

export const InfoItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
