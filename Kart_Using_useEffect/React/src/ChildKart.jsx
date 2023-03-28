import React from "react";
import styled from "styled-components";

export const RowWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  flex-wrap: wrap;
  gap: 12px;
  margin: 12px;
`;

export const NameContainer = styled.div`
  border: 1px solid black;
  text-align: center;
`;
export const Image = styled.img`
  height: 300px;
`;

export const Index = styled.div`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 100px;
`;
export const Description = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 20px;
`;
const NameItem1 = (props) => {
  return (
    <NameContainer>
      <Index>ID: {props.Data.id}</Index>
      <Index>TITLE: {props.Data.title}</Index>
      <Index>CATEGORY: {props.Data.category}</Index>
      <Index>
        RATE:{props.Data.rating.rate}, COUNT: {props.Data.rating.count}
      </Index>

      <Image src={props.Data.image} />
      <Description>DESCRIPTION: {props.Data.description}</Description>
    </NameContainer>
  );
};

export default NameItem1;
