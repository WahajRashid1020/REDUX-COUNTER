import React, { useEffect } from "react";
import { fetchProduct } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeProducts,
} from "../redux/actions/productActions";
const ProductsDetails = () => {
  const { pid } = useParams();
  const product = useSelector((state) => state.product);
  const { thumbnail, title, price, category, description } = product;
  const dispatch = useDispatch();
  // const fetchProductDetails = async () => {
  //   const response = await axios.get(`/products/${pid}`).catch((err) => {
  //     console.log("ERROR", err);
  //   });
  //   dispatch(selectedProducts(response.data));
  // };
  useEffect(() => {
    if (pid && pid !== "") dispatch(fetchProduct(pid));
    return () => {
      dispatch(removeProducts());
    };
  }, [pid]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={thumbnail} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
