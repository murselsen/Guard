import React, { useState } from "react";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field } from "formik";

// Styles
import css from "./AddTransactionForm.module.css";

// Icons
import { FaPlus, FaMinus } from "react-icons/fa";

// Validation schema
const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Please enter the number")
    .required("Amaount required"),
  date: yup.date().required("Date required"),
  comment: yup.string().required("Comment required"),
  type: yup.string().required(),
  category: yup.string(),
});

const AddTransactionForm = () => {
  return (
    <Formik validationSchema={schema} onSubmit={() => {}} initialValues={{}}>
      <Form className={css.TransactionForm}>
        <div className={css.FormRow}>
          <h3>Add Transaction</h3>
        </div>
        <div className={css.FormRow}>
          <label htmlFor="incomeTrans" className={css.switchLabel}>
            Income
          </label>
          <div className={css.switchBox}>
            <div className={css.incomeSwitch}>
              <FaPlus className={css.icon} />
            </div>
            <Field
              type="radio"
              id="incomeTrans"
              name="type"
              value="income"
              className={css.switchInput}
            />
            <div className={css.expenceSwitch}>
              <FaMinus className={css.icon} />
            </div>
            <Field
              type="radio"
              id="expenceTrans"
              name="type"
              value="expence"
              className={css.switchInput}
            />
          </div>
          <label htmlFor="expenceTrans" className={css.switchLabel}>
            Expence
          </label>
        </div>
        <div className={[css.FormRow, css.FormRowMobile].join(" ")}>
          <Field
            type="number"
            name="amount"
            className={css.FormInput}
            placeholder={"0.00"}
          />
          <Field
            type="date"
            name="date"
            className={css.FormInput}
            placeholder={"07.07.2023"}
          />
        </div>
        <div className={css.FormRow}></div>
        <div className={css.FormRow}></div>
      </Form>
    </Formik>
  );
};

export default AddTransactionForm;
