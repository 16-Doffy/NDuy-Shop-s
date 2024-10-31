import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categrories } from "../theme/Header";
import { ROUTERS } from "../../../utils/router";
const ListProduct = () => {
  const sort = [
    "Gía thấp đến cao",
    "Gía cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];
  return (
    <>
      <BreadCrumb name="Danh Sách Sản Phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar">
              <div className="sidebar_item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="sidebar_item"></div>
              <h2>Mức giá</h2>
              <div className="price-range_wrap">
                <div className="tu">
                  <p>Từ:</p>
                  <input type="number" min={0}></input>
                </div>
                <div className="den">
                  <p>Đến:</p>
                  <input type="number" min={1}></input>
                </div>

                <div className="sidebar_item">
                  <h2>Sắp xếp</h2>
                  <div className="tags">
                    {sort.map((item, key) => (
                      <div
                      className={`tag ${key === 0 ? "active" : ""}`}

                        key={key}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sidebar_item">
                  <h2>Thể loại khác</h2>
                  <ul>
                    {categrories.map((categrories, key) => (
                      <li key={key}>
                        <Link to={ROUTERS.USER.PRODUCT}>{categrories}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
                    <div className="row">
                    <div className="col-lg-9">
                    Sản phẩm
                    </div>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ListProduct);
