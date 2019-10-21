import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
const PhotoFlexColumns = ({ data }) => {
  const [photoArr, setPhotos] = useState([]);
  const [totalHeight, getHeight] = useState();
  useEffect(() => {
    setPhotos(data);
    getHeight(() => {
      return data.reduce((a, c) => {
        a = a + c.height;
        return a;
      }, 0);
    });
  }, []);
  console.log("total height", totalHeight);
  return (
    <Columns totalHeight={totalHeight}>
      {photoArr.map((d, i) => {
        return (
          <Image key={i} indx={i} height={d.height}>
            <img src={d.css} alt="" />
          </Image>
        );
      })}
    </Columns>
  );
};

export default PhotoFlexColumns;

const Columns = styled.div`
  width: 100%;
  max-height: ${props =>
    props.totalHeight != undefined && props.totalHeight / 3.6}px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    max-height: ${props =>
      props.totalHeight != undefined && props.totalHeight / 4.6}px;
  }
`;

const Image = styled.div`
  width: 30%;
  margin: 2%;
  img {
    width: 100%;
  }
`;
