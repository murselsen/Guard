import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Styles
import css from "./TabList.module.css";

// Icons
import { MdHome, MdAttachMoney } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
//Render
const TabList = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className={css.TabList_Area}>
      <ul className={css.TabList_List}>
        <TabItem title="Dashboard" icon={<MdHome />} link={"/dashboard"} />
        <TabItem title="Statistics" icon={<SlGraph />} link={"/statistics"} />
        {isMobile ? (
          <TabItem
            title="Currency"
            icon={<MdAttachMoney />}
            link={"/currency"}
          />
        ) : null}
      </ul>
    </div>
  );
};

const TabItem = ({ title, icon, link }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    // Check if the current location matches the link
    setIsActive(location.pathname === link);
    // If the link is a subpath, check if it starts with the link
    if (!isActive && location.pathname.startsWith(link)) {
      setIsActive(true);
    }
  }, [isActive, link, location]);
  return (
    <li
      className={
        isActive ? `${css.TabList_Item} ${css.active}` : css.TabList_Item
      }
      onClick={() => navigate(link, { replace: true })}
    >
      {icon} <span className={css.TabList_Item_Title}>{title}</span>
    </li>
  );
};

export default TabList;
