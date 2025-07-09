import React from "react";
// Styless
import css from "./CurrencyPage.module.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import TabList from "../../components/TabList/TabList";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";

const CurrenyPage = () => {
  return (
    <div className={css.CurrencyPage}>
      <Navbar />
      <TabList />
      <CurrencyTable />
      <h1>Welcome to Money Guard - CurrencyPage</h1>
      <p>Your personal finance protection starts here.</p>
    </div>
  );
};

export default CurrenyPage;
