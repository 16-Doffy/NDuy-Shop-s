import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { generatePath, Link } from "react-router-dom";
import { format } from "../../../utils/fomat";
import "./style.scss";
import { ROUTERS } from "../../../utils/router";
const ProductCart = ({ img, name, price }) => {
  return (
    <div className="featured_item pl-pr-10">
      <div
        className="featured_item_pic"
        style={{ backgroundImage: `url(${img})` }}
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
          <Link to={generatePath(ROUTERS.USER.DETAILPRODUCT, { id: 1 })}>
            Xem Chi Tiết
          </Link>
        </h6>
        <h5>{format(price)}</h5>
      </div>
    </div>
  );
};
export default ProductCart;
