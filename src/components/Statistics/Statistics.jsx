import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    const getRandomHexColor = () => {                       //рандомне переключення кольорів
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
    .padStart(6, 0)}`;
        };

    return (
        <section className={css.statistics}>
  {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

  <ul className={css['stat-list']}>  
  {stats.map((stats) => (
     <li key={stats.id}  style={{ backgroundColor: getRandomHexColor()}} className={css.item}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </li>  
  ))}  
  </ul>
</section>
    );
  };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id:  PropTypes.string.isRequired,
            label:  PropTypes.string.isRequired,
            percentage:  PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;