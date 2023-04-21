import React from "react";
import s from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onClick,
}) => (
  <>
    <ul className={s.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
    <button className={s.btn} type="button" onClick={onClick}>
      Reset
    </button>
  </>
);

export default Statistics;
