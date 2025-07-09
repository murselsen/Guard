// Icon
import appLogo from "../../assets/images/appLogo.png";
import userIcon from "../../assets/user.svg";
import emailIcon from "../../assets/email.svg";
import passwordIcon from "../../assets/password.svg";

// Styles
import css from "./RegistrationPage.module.css";

// Modules
import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";

// Readux Operations
import { logIn } from "../../redux/auth/operations";
import { set } from "react-hook-form";
// Component
const RegistrationPage = () => {
  const [pass, setPass] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Name is too short! Should be 2 chars minimum.")
      .required("Required!"),
    email: Yup.string().email("Must be valid email!").required("Required!"),
    password: Yup.string()
      .min(6, "Password is too short! Should be 6 chars minimum.")
      .max(12, "Password is too long! Should be 12 chars maximum.")
      //   .matches(
      //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      //     "Password contain at least one letter, one number, and one special character"
      //   )
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    setPass(values.password);
    dispatch(logIn(values));
    navigate("/dashboard", { replace: true });
    resetForm();
  };

  return (
    <div className={css.RegistrationPage}>
      <div className={css.RegistrationPage_Area}>
        <div className={css.RegistrationPage_Header}>
          <img
            src={appLogo}
            alt="Money Guard"
            className={css.RegistrationPage_Logo}
          />
          <h1 className={css.RegistrationPage_Title}>Money Guard</h1>
        </div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          <Form className={css.RegistrationPage_Form}>
            <div className={css.RegistrationPage_Form_Group}>
              <img
                src={userIcon}
                alt="User Name Icon"
                className={css.RegistrationPage_Icon}
              />
              <Field
                type="text"
                name="username"
                placeholder="Name"
                className={css.RegistrationPage_Input}
              />
            </div>
            <ErrorMessage
              name="username"
              component="span"
              className={css.RegistrationPage_Form_ErrorMessage}
            />
            <div className={css.RegistrationPage_Form_Group}>
              <img
                src={emailIcon}
                alt="Email Icon"
                className={css.RegistrationPage_Icon}
              />
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                className={css.RegistrationPage_Input}
              />
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className={css.RegistrationPage_Form_ErrorMessage}
            />
            <div className={css.RegistrationPage_Form_Group}>
              <img
                src={passwordIcon}
                alt="Email Icon"
                className={css.RegistrationPage_Icon}
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={css.RegistrationPage_Input}
              />
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className={css.RegistrationPage_Form_ErrorMessage}
            />
            <div className={css.RegistrationPage_Form_Group}>
              <img
                src={passwordIcon}
                alt="Email Icon"
                className={css.RegistrationPage_Icon}
              />

              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={css.RegistrationPage_Input}
              />
            </div>
            <PasswordStrengthBar
              password={pass}
              className={css.registerPasswordBar}
            />
            <ErrorMessage
              name="confirmPassword"
              component="span"
              className={css.RegistrationPage_Form_ErrorMessage}
            />
            <button
              type="submit"
              className={[
                css.RegistrationPage_Button,
                css.RegistrationPage_Button_Submit,
              ].join(" ")}
            >
              Log In
            </button>
            <button
              onClick={() => {
                navigate("/register", { replace: false });
              }}
              type="button"
              className={css.RegistrationPage_Button}
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationPage;
