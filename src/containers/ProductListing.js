import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const dispatch = useDispatch();
  // const fetchProduct = async () => {
  //   const response = await axios.get("/products").catch((err) => {
  //     console.log("ERROR", err);
  //   });
  //   dispatch(setProducts(response.data.products));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
