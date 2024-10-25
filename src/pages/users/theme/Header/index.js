import { memo } from "react";
import "./style.scss";
import { BsFacebook, BsFillEmojiLaughingFill, BsFillThreadsFill, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left"> trai</div>
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

                <span><BsFillEmojiLaughingFill /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);
