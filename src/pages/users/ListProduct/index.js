import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import ProductCart from "../ProductCard";
import "./style.scss";

import bo from "../../../asset/anh/images/bo.jpg";
import cam from "../../../asset/anh/images/cam.jpg";
import chanhvang from "../../../asset/anh/images/chanhvang.jpg";
import dua from "../../../asset/anh/images/dua.jpg";
import eptao from "../../../asset/anh/images/eptao.jpg";
import kiwi from "../../../asset/anh/images/kiwi.jpg";
import luou from "../../../asset/anh/images/luou.jpg";
import thapcam from "../../../asset/anh/images/thapcam.jpg";
import xoai from "../../../asset/anh/images/xoai.jpg";
import { categrories } from "../theme/Header";

const ListProduct = () => {
  const sortOptions = [
    "Gía thấp đến cao",
    "Gía cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  const products = [
    { img: bo, name: "Bơ tươi", price: "12000" },
    { img: chanhvang, name: "Chang tươi", price: "10000" },
    { img: dua, name: "Dừa xiêm", price: "15000" },
    { img: eptao, name: "Nước ép táo", price: "25000" },
    { img: kiwi, name: "Kiwi xuất khẩu", price: "45000" },
    { img: luou, name: "Lượu không hạt", price: "120000" },
    { img: thapcam, name: "Sinh tố thập cẩm", price: "34000" },
    { img: xoai, name: "Xoài chín", price: "65000" },
    { img: cam, name: "Cam xành", price: "80000" },
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
              <div className="sidebar_item">
                <h2>Mức giá</h2>
                <div className="price-range_wrap">
                  <div className="tu">
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div className="den">
                    <p>Đến:</p>
                    <input type="number" min={1} />
                  </div>
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sortOptions.map((option, key) => (
                    <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categrories.map((category, key) => (
                    <li key={key}>
                      <Link to={ROUTERS.USER.PRODUCT}>{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {products.map((item, key) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-sx-12" key={key}>
                  <ProductCart name={item.name} img={item.img} price={item.price} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ListProduct);
