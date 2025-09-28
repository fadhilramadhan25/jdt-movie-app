<<<<<<< HEAD
=======

>>>>>>> 1f1812751d52970a61072bc169f5bb69bb70eb7d
import { useLocation } from "react-router";
import { Hash } from "../../constants";
import Detail from "./detail";
import List from "./list";

const ProductScreen = () => {
  const { hash } = useLocation();

  if (hash === Hash.DETAIL) {
    return <Detail />;
  }
  return <List />;
};

export default ProductScreen;
