import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "../../../utils/formatter";
import { memo } from "react";

const ProductCart = ({ img, name, price }) => {
  return (
    <>
      <div className="featured_item pl-pr-10">
        <div
          className="featured_item_pic"
          style={{ backgroundImage: `url(/categories/eptao.jpg)` }}
        >
          <ul className="featured_item_pic_hover">
            <li>
              <AiOutlineEye />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </div>
        <div className="featured_item_text">
          <h6>
            <Link to="">{name}</Link>
          </h6>
          <h5>{formatter(price)}</h5>
        </div>
      </div>
    </>
  );
};
export default memo(ProductCart);