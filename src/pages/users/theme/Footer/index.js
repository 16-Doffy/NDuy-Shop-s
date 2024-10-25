import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-lg-3">
    <div className="footer__about">
    <h1 className="footer__abou_logo">Doffy Shop's </h1>
    <ul>
      <li>Địa chỉ: 108 Lò Lu</li>
      <li>Phone:099912347</li>
      <li>Email:doffyshop@gmail.com</li>
    </ul>
    </div>

        </div>
        <div className="col-lg-6">
    <div className="footer_widget"> 
    <h6> Cửa Hàng </h6>
 
    <ul> 
      <li>
        <Link to="">Liên hệ</Link>
      </li>

      <li>
        <Link to="">Thông tin về chúng tôi</Link>
      </li>

      <li>
        <Link to="">Sản phẩm kinh doanh</Link>
      </li>
    </ul>

    <ul> 
      <li>
        <Link to="">Thông tin tài khoản</Link>
      </li>

      <li>
        <Link to="">Giỏ hàng</Link>
      </li>

      <li>
        <Link to="">Danh sách ưa thích</Link>
      </li>
    </ul>
    </div>

        </div>
        <div className="col-lg-3">
          <div className="footer_widget">
            <h6>Khuyến mãi & ưu đãi</h6>
            <p>Đăng kí nhận thông tin tại đây</p>
            <form action="#">
              <div>
                <input type="text" placeholder="Nhập email"/>
                <button type="submit" className="button_submit">
                  Đăng kí
                </button>
              </div>
              <div className="footer)widget_social">
            <div>
            <FaFacebookF />
            </div>
            <div>
            <FaYoutube />
            </div>
            <div>
            <IoMdMailUnread />
            </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3">4</div>
        </div>
      </div>
      
    </footer>
  );
};

export default memo(Footer);
