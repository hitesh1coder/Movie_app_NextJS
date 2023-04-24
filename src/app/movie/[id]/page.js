import React from "react";
import styles from "../../styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e3c99cd832mshe23f39dd3d352e7p16d7c3jsnea78a275fea5",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \ <span>{main_data.type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={250}
            height={200}
          />
        </div>

        <div>
          <h2>{main_data.title}</h2>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
