import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productSlice";

const API_URL = "https://dummyjson.com/products";

const useFetchProducts = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        dispatch(addProducts(data.products));
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
};

export default useFetchProducts;