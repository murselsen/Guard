import React from "react";
import css from "./Navbar.module.css";
import exitLogo from "../../assets/exit.svg";
import appLogo from "../../assets/images/appLogo.png"; // Assuming you have a logo image
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../redux/auth/operations"; // Assuming you have a logOut operation
const Navbar = () => {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.auth.user);
  const nagivateToLogin = () => {
    dispatch(logOut());
    nagivate("/", { replace: true });
  };

  return (
    <nav className={css.Navbar_Area}>
      <div className={css.Navbar_Logo}>
        <img
          src={appLogo}
          alt="Money Guard Logo"
          className={css.Navbar_Logo_Image}
        />
        <span className={css.Navbar_Logo_Title}>Money Guard</span>
      </div>
      <div className={css.Navbar_Auth}>
        <span className={css.Navbar_Auth_ProfileName}>{username}</span>
        <button className={css.Navbar_Auth_Button} onClick={nagivateToLogin}>
          <img src={exitLogo} className={css.Auth_Button_Icon} />
          <span className={css.Auth_Button_Text}>Exit</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
