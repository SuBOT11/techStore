import React from "react";
import Styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  );
}
const TitleWrapper = Styled.div`
text-align: ${(props) => (props.center ? "center" : "left")};
.title-underline{
  height:0.25rem;
  width:8rem;
  background:var(--primaryColor);
  margin:${(props) => (props.center ? "0 auto" : "0")}


`;
