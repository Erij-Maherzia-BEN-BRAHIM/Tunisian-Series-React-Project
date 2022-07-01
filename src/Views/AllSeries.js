import React, { useEffect, useState } from "react";
import SeriesList from "../components/SeriesList";
import styles from '../components/AddSerieForm.module.css'
import { FaSpinner } from "react-icons/fa";

export default function AllSeries() {
  const [tabSeries, setTabSeries] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const listSeries = [];
  useEffect(() => {
    setSpinner(true);
    fetch("https://tunisian-series-default-rtdb.firebaseio.com/Series.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpinner(false);
        for (const key in data) {
          data[key].id = key;
          listSeries.push(data[key]);
        }
        setTabSeries(listSeries);
      });
  }, []);

  if (spinner) {
    return (
      <div className="fetching">
        <FaSpinner className="spinner"></FaSpinner>
      </div>
    );
  }
  return (
    <div>
      <h1 className={styles.h1}>All Series</h1>
      <SeriesList listOfSeries={tabSeries}></SeriesList>
    </div>
  );
}
