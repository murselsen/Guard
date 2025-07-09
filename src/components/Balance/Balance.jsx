import React from "react";
import css from "./Balance.module.css";

import { useSelector } from "react-redux";

const Balance = () => {
  const { balance } = useSelector((state) => state.auth.user);
  return (
    <div className={css.Balance_Area}>
      <h2 className={css.Balance_SubTitle}>Your Balance</h2>
      <span className={css.Balance_Value}>$ {balance}</span>
    </div>
  );
};

export default Balance;
