import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedPage = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("RestrictedPage isLoggedIn:", isLoggedIn);
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : children;
};
export default RestrictedPage;
