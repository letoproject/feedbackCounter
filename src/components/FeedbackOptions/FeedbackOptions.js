import React from "react";
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.container}>
    {options.map((option) => (
      <button
        className={s.btn}
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);


export default FeedbackOptions;