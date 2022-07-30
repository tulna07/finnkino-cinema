import React from "react";

import { Formik } from "formik";
import { FormHelperText } from "@mui/material";

function ErrorMessage(name) {
  return <ErrorMessage name={name} component={FormHelperText} />;
}

export default ErrorMessage;
