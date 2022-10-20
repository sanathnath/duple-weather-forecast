import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_error } from "../redux/reducers/weatherReducer";

function ErrorMessage() {
  const dispatch = useDispatch();

  const {error} = useSelector((state)=>{
    return state.weather;
  })
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(set_error(false));
  };
  return (
    <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        Enter a valid City
      </Alert>
    </Snackbar>
  );
}

export default ErrorMessage;
