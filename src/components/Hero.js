import React from "react";
import Styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";
export default function Hero({ img, title, max, children }) {
  
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = Styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content:center;


min-height:${(props) => (props.max ? "100vh" : "60vh")};
color: var(--mainWhite);
background: linear-gradient(var(--primaryRGBA),var(--primaryRGBA)), url(${(
  props
) => props.img} )center/cover no-repeat;
.title{
  padding-top:2rem;
  font-size: 3.5rem;
  text-transform:uppercase;
  letter-spacing:var(--mainSpacing)
}

`;
Hero.defaultProps = { img: mainBcg };
