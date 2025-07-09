import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Auth components
import RestrictedPage from "./components/Auth/RestrictedPage";
import PrivatePage from "./components/Auth/PrivatePage";

// Pages
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Currency = lazy(() => import("./pages/CurrencyPage/CurrencyPage"));
const Statistics = lazy(() => import("./pages/StatisticsPage/StatisticsPage"));
const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
const Register = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

// Redux Operations
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivatePage>
              <Home />
            </PrivatePage>
          }
        />

        <Route
          path="/currency"
          element={<PrivatePage>{<Currency />}</PrivatePage>}
        />
        <Route
          path="/statistics"
          element={<PrivatePage>{<Statistics />}</PrivatePage>}
        />
        <Route
          path="/"
          element={
            <RestrictedPage>
              <Login />
            </RestrictedPage>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedPage>
              <Register />
            </RestrictedPage>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
