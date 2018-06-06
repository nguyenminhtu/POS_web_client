import * as constants from '../constants';
import axios from 'axios';
import { push } from 'react-router-redux';

import { handleErrorsResponse } from 'assets/helper/handleErrorsResponse';

export const submitLogin = (email, password) => {
  let url = process.env.REACT_APP_HOST + 'login';
  let formData = new FormData();
  formData.append('authentication[email]', email);
  formData.append('authentication[password]', password);
  return dispatch => {
    axios({
      url, method: 'POST',
      data: formData
    }).then(response => {
      dispatch({
        type: constants.LOGIN_SUCCESS,
        response
      });
      saveUser(response.data);

      dispatch(push('/'));
    }).catch(error => {
      dispatch({
        type: constants.LOGIN_FAIL,
        errors: handleErrorsResponse(error.response.data.errors)
      })
    });
  }
}

const saveUser = response => {
  const user = JSON.stringify(response.data.user);
  const products = JSON.stringify(response.data.products);
  const customers = JSON.stringify(response.data.customers);
  const payment_methods = JSON.stringify(response.data.payment_methods);
  localStorage.setItem('user', user);
  localStorage.setItem('products', products);
  localStorage.setItem('customers', customers);
  localStorage.setItem('payment_methods', payment_methods);
  localStorage.setItem('token', response.data.token);
};
