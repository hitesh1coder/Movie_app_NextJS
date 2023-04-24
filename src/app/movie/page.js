import React from "react";
import MoviesCard from "../component/MoviesCard";
import styles from "../styles/common.module.css";

const movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e3c99cd832mshe23f39dd3d352e7p16d7c3jsnea78a275fea5",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data?.map((curElem) => {
              return <MoviesCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
