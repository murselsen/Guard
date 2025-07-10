import React from "react";
import css from "./ButtonAddTransactions.module.css";

import plusIcon from "../../assets/plus.svg"; // Assuming you have a plus icon in your assets
// import ModalAddTransaction from "../ModalAddTransaction/ModalAddTransaction";
const ButtonAddTransactions = () => {
  const [isModaAddTransactionOpen, setIsModalAddTransactionOpen] =
    React.useState(false);
  const toggleModalHandler = () =>
    setIsModalAddTransactionOpen(!isModaAddTransactionOpen);

  return (
    <>
      {/* <ModalAddTransaction
        show={isModaAddTransactionOpen}
        onClose={toggleModalHandler}
      /> */}
      <button onClick={toggleModalHandler} className={css.buttonAddTransaction}>
        <img src={plusIcon} alt="Add Transaction" />
      </button>
    </>
  );
};

export default ButtonAddTransactions;
