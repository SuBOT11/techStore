import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

const ContactPage = () => {
  return (
    <>
      <Hero img={contactBcg} max="true" />
      <Contact />
    </>
  );
};
export default ContactPage;
