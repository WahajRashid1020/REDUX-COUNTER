import axios from "axios";
import { ActionTypes } from "../contants/action-type";
import fakeapi from "../../apis/fakeapi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeapi.get("/products");
  console.log("object", response.data.products);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data.products,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeapi.get(`/products/${id}`);
  console.log("PROOOOOO", response.data);

  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
