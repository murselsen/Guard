import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivatePage = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};
export default PrivatePage;
