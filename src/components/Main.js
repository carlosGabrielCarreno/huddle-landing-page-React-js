import React from "react";
import Footer from "./Footer";
import styled from "../css/Main.module.css";

export default function Main() {
  return (
    <main className={styled.main}>
      <section className={styled.section}>
        <h1 className={styled.h1}>
          Build The Community
          <br />
          Your Fans Will Love
        </h1>
        <p className={styled.p}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className={styled.button}>Register</button>
      </section>
      <Footer />
    </main>
  );
}
