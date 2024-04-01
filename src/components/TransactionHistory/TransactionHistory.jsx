import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-history"]}>
     <thead>
      <tr>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
      </thead> 

      <tbody>
        {items.map((items) => {
          return (
            <tr key={items.id}>
              <td>{items.type}</td>
              <td>{items.amount}</td>
              <td>{items.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items:PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.number.isRequired, 
type: PropTypes.string.isRequired, 
amount: PropTypes.number.isRequired, 
currency: PropTypes.string.isRequired,
}) 
).isRequired,
};

export default TransactionHistory; 