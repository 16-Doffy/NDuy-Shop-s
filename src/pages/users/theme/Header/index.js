import { memo } from "react";
import "./style.scss";
import { BsChatRightHeartFill, BsFacebook,BsFillThreadsFill, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { format } from "../../../../utils/fomat";
const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left"> 
            <ul>
              <li><BsChatRightHeartFill />Hello@gmail.com</li>
              <li>Miễn phí ship đơn từ {format(100000)}</li>
            </ul>
            
          </div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BsFillThreadsFill />
                </Link>
                </li>
                <li>
                <Link to={""}>
                  <BsFillThreadsFill />
                </Link>
              </li>
              <span className="login"> Đăng nhập</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);
