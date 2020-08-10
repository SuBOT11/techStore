import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <form action="" className="mt-5">
            <Title title="contact us"/>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="sujan"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="sujan@sujan.com"
              />
            </div>
            <div className="form">
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
