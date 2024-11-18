import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import { format } from "../../../utils/fomat";
import Quantity from "../Quantity/index";
import {  AiOutlineClose } from "react-icons/ai";
import eptao from "../../../asset/anh/images/eptao.jpg";
import kiwi from "../../../asset/anh/images/kiwi.jpg";
import luou from "../../../asset/anh/images/luou.jpg";
import thapcam from "../../../asset/anh/images/thapcam.jpg";
import xoai from "../../../asset/anh/images/xoai.jpg";
const ShoppingCardPage = () => {
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

              <tr>
                <td className="shopping_cart_item">
                  <img src={eptao} alt="eptao" />
                  <h4>Ép táo</h4>
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

              <tr>
                <td className="shopping_cart_item">
                  <img src={luou} alt="luou" />
                  <h4>Lượu</h4>
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

              <tr>
                <td className="shopping_cart_item">
                  <img src={kiwi} alt="kiwi" />
                  <h4>Kiwi</h4>
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

              <tr>
                <td className="shopping_cart_item">
                  <img src={thapcam} alt="thapcam" />
                  <h4>Thập cẩm</h4>
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
      </div>
    </>
  );
};
export default memo(ShoppingCardPage);
