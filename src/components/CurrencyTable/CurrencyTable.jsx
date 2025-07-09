import React from "react";
import css from "./CurrencyTable.module.css";
import CurrenyGraphics from "../../assets/images/MoneyGraphic.png";
const CurrencyTable = () => {
  return (
    <div className={css.CurrencyTable_Container}>
      <table className={css.CurrencyTable}>
        <tr className={css.CurrencyTable_Header}>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
        <tr>
          <td>USD</td>
          <td>1.00</td>
          <td>1.02</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>1.10</td>
          <td>1.12</td>
        </tr>
      </table>
      <img src={CurrenyGraphics} width={"100%"} />
    </div>
  );
};

export default CurrencyTable;
