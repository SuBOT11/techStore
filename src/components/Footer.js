import React from "react";
import Styled from "styled-components";
import { ProductConsumer } from "../context";

const Footer = () => {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value);
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; texh store {new Date().getFullYear} all
                    rights reserved
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialLinks.map((item) => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default Footer;
const FooterWrapper = Styled.footer`
background: var(--darkGrey);
color:var(--mainWhite);
.icon{
  font-size : 2rem;
  color:var(--mainWhite)
  transition: var(--mainTransition);
  icon:hover{
    color:var(--primaryColor);
    cursor:pointer;
  }
}

`;
