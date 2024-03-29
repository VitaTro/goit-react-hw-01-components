import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ title, data }) => {
    return (
        <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
    
      <li key={data.id} className="item">
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
    </li>  
   
  </ul>
</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id:  PropTypes.string.isRequired,
            label:  PropTypes.string.isRequired,
            percentage:  PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics;