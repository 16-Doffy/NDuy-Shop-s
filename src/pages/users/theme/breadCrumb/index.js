import { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";
import "./style.scss";
const BreadCrumb = (props) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb_text">
        <h2>Doffy Shop</h2>
        <div className="breadcrumb_option">
          <ul>
            <li className="Link">
              <Link to={ROUTERS.USER.HOME}> TRANG CHỦ</Link>
            </li>
            <li>{props.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default memo(BreadCrumb);
