import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const { id, type, amount, currency} = items;
    return (
        <table className={css["transaction-history"]}>
  <thead>
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Deposit</td>
      <td>103.10</td>
      <td>BWP</td>
    </tr>
    <tr>
      <td>Payment</td>
      <td>862.44</td>
      <td>AUD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>371.43</td>
      <td>MUR</td>
    </tr>
  </tbody>
</table>
    );
};
TransactionHistory.propTypes = {
transactions: PropTypes.shape({
id: PropTypes.string.isRequired, 
type: PropTypes.string.isRequired, 
amount: PropTypes.string.isRequired, 
currency: PropTypes.string.isRequired,
}).isRequired 

};
export default TransactionHistory; 