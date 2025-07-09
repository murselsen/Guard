import React from "react";
// Styless
import cssPage from "../Page.module.css";
import { useMediaQuery } from "react-responsive";

// Components
import Navbar from "../../components/Navbar/Navbar";
import TabList from "../../components/TabList/TabList";
import Balance from "../../components/Balance/Balance";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";
import ButtonAddTransactions from "../../components/ButtonAddTransactions/ButtonAddTransactions";
const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div className={cssPage.Page}>
        <Navbar />
        <div className={cssPage.Sidebar}>
          <div className={cssPage.Sidebar_Actions}>
            <TabList />
            <Balance />
          </div>
          {!isMobile && (
            <div className={cssPage.Sidebar_Table}>
              <CurrencyTable />
            </div>
          )}
        </div>
        <div className={cssPage.PageContent}>
          <TransactionsList />
        </div>
      </div>
      <ButtonAddTransactions />
    </>
  );
};

export default HomePage;
