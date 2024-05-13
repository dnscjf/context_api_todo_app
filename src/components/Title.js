import styled from "@emotion/styled";
import React from "react";

const TitleWraprStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LablelStyle = styled.h1`
  margin-top: 0;
`;

const Title = ({ label }) => {
  return (
    <TitleWraprStyle>
      <h1>{label}</h1>
    </TitleWraprStyle>
  );
};

export default Title;
