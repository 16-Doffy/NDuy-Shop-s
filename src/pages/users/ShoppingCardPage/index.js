import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import { format } from "../../../utils/fomat";
import Quantity from "../Quantity/index";
import { AiOutlineClose } from "react-icons/ai";
// import eptao from "../../../asset/anh/images/eptao.jpg";
// import kiwi from "../../../asset/anh/images/kiwi.jpg";
// import luou from "../../../asset/anh/images/luou.jpg";
// import thapcam from "../../../asset/anh/images/thapcam.jpg";
import xoai from "../../../asset/anh/images/xoai.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
const ShoppingCardPage = () => {
  const navigate = useNavigate ();
  
  return (
    <>
      <BreadCrumb name="Giỏ hàng" />
      <div className="container">
        <div className="table_cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Gía</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shopping_cart_item">
                  <img src={xoai} alt="xoai" />
                  <h4>Xoài</h4>
                </td>
                <td>{format(200000)}</td>
                <td>
                  <Quantity quantity="2" hasAddToCart={false} />
                </td>
                <td>{format(400000)}</td>
                <td className="icon_close">
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-6 ">
            <div className="shopping_countinute">
              <h3>Mã giảm giá</h3>
              <div className="shopping_discount">
                <input placeholder="Nhập mã giảm giá" />
                <button className="button-submit" type="button">
                  {" "}
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shopping_checkout">
              <h2>Tổng đơn</h2>
              <ul>
                <li>
                  Số lượng: <span>{2}</span>
                </li>
                <li>
                  Thành tiền: <span>{format(200000)}</span>
                </li>
              </ul>

              <button type="button" className="button-submit" onClick={() => navigate(ROUTERS.USER.CHECKOUT)}>
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ShoppingCardPage);
