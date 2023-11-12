import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectErrorMessage } from '../../redux/sclices/errorSlice';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
