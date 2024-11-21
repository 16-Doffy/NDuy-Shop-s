import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import { format } from "../../../utils/fomat";

const Checkout = () => {
  return (
    <>
      <BreadCrumb name="Đặt hàng" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="checkout_input">
              <label>
                Họ và tên: <span className="required">*</span>
              </label>

              <input placeholder="Nhập họ và tên" type="text"></input>
            </div>
            <div className="checkout_input">
              <label>
                Địa chỉ: <span className="required">*</span>
              </label>

              <input placeholder="Nhập địa chỉ" type="text"></input>
            </div>
            <div className="checkout_input_group">
              <div className="checkout_input">
                <label>
                  Điện thoại: <span className="required">*</span>
                </label>

                <input placeholder="Nhập điện thoại" type="text"></input>
              </div>

              <div className="checkout_input">
                <label>
                  Email: <span className="required">*</span>
                </label>

                <input placeholder="Nhập Email" type="text"></input>
              </div>
              <div className="checkout_input">
                <label>Ghi chú</label>
                <textarea rows={15} placeholder="Nhâp ghi chú" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="checkout_order">
              <h3>Đơn hàng</h3>
              <ul>
              <li>
                  <h4>Dâu</h4>
                  <b>{format(50000)}</b>
                </li>
                <li>
                  <h4>Nho xanh</h4>
                  <b>{format(65000)}</b>
                </li>
                <li>
                  <h4>Táo đỏ</h4>
                  <b>{format(35000)}</b>
                </li>
                <li>
                  <h4>Ổi</h4>
                  <b>{format(23000)}</b>
                </li>
                <li>
                  <h4>Quýt</h4>
                  <b>{format(42000)}</b>
                </li>
                <li>
                  <h4>Mã giảm giá <br/><span>(Giảm 10% cho đơn hàng từ {format(200000)})</span> </h4>
                  <b>MYME</b>
                </li>
                <li className="checkout_order_subtotal">
                  <h3>Tổng đơn</h3>
                  <b>{format(187000)}</b>
                </li>
              </ul>
              <button type="button" className="button-submit">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Checkout);
