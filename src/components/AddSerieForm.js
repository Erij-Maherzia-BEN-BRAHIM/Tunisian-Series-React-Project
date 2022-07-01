import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/AddSerieForm.module.css";
export default function AddSerieForm() {
  const refTitle = useRef("");
  const refCover = useRef("");
  const refYear = useRef("");
  const refDescription = useRef("");
  const navigate= useNavigate()
  function submitHandler(e) {
    e.preventDefault();
    let NewSerie = {
      title: refTitle.current.value,
      cover: refCover.current.value,
      year: refYear.current.value,
      description: refDescription.current.value,
    };
    fetch("https://tunisian-series-default-rtdb.firebaseio.com/Series.json", {
      method: "POST",
      body: JSON.stringify(NewSerie),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        alert("Série bien ajoutée");

        navigate("/all-series", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        alert("Erreur inconnue !");
      });
  }
  return (
    <>
      <h1 className={styles.h1}>Add New Serie</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={styles.label}>Title</label> <br />
        <input type="text" className={styles.input} ref={refTitle}></input>
        <br />
        <label className={styles.label}>Cover</label>
        <br />
        <input type="url" className={styles.input} ref={refCover}></input>
        <br />
        <label className={styles.label}>Year</label>
        <br />
        <input type="number" className={styles.input} ref={refYear}></input>
        <br />
        <label className={styles.label}>Description</label>
        <br />
        <textarea
          rows="10"
          className={styles.input}
          ref={refDescription}
        ></textarea>
        <button className={styles.button}> Add New Serie</button>
      </form>
    </>
  );
}
