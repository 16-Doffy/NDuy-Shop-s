import { memo, useEffect, useState } from "react";
import "./style.scss";
import {
  BsChatRightHeartFill,
  BsFacebook,
  BsFillThreadsFill,
  BsInstagram,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { format } from "../../../../utils/fomat";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ROUTERS } from "../../../../utils/router";
import { IoMdMailUnread } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
export const categrories = [
  "Thịt tươi",
  "Rau củ",
  "Nước trái cây",
  "Trái cây",
  "Hải sản",
];
const Header = () => {  
  const location = useLocation();
  const [isHome, setIshome] = useState(location.pathname.length <= 1);
  const [isShowCaterogy, setIsShowCaterogyset] = useState(isHome);

  const [menu] = useState([
    { name: "Trang chủ", path: ROUTERS.USER.HOME },
    { name: "Cửa hàng", path: ROUTERS.USER.PRODUCT },
    {
      name: "Sản Phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau Củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
        {
          name: "Nước Uống",
          path: "",
        },
      ],
    },
    { name: "Bài viết", path: "" },
    { name: "Liên hệ", path: "" },
  ]);


  useEffect(() =>{
    const isHome = location.pathname.length <=1;
    setIshome(isHome);
    setIsShowCaterogyset(isHome);
  },[location]);
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <BsChatRightHeartFill />
                  Hello@gmail.com
                </li>
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
                    <IoMdMailUnread />
                  </Link>
                </li>
                <span className="login"> Đăng nhập</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="header_logo">
              <h1>Doffy Shop's</h1>
            </div>
          </div>
          <div className="col-lg-6 ">
            <nav className="header__menu">
              <ul>
                {menu?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}> {childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xlg-3 ">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{format(1236789)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categroty_container">
          <div className="col-lg-3 hero_categroty">
            <div
              className="hero_categroty_all"
              onClick={() => setIsShowCaterogyset(!isShowCaterogy)}
            >
              <MdRestaurantMenu />
              Danh sách sản phẩm
            </div>
            {isShowCaterogy && (
              <ul className={isShowCaterogy ? "" : "hidden"}>
                {categrories.map((categrories, key) => (
                  <li key={key}>
                    <Link to={ROUTERS.USER.PRODUCT}>{categrories}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero_search_container">
            <div className="hero_search_">
              <div className="hero_search_form">
                <form>
                  <input
                    type="text"
                    name=""
                    value=""
                    placeholder="Bạn muốn tìm sản phẩm nào?"
                  />
                  <button type="submit"> Tìm kiếm</button>
                </form>
              </div>

              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <FaPhoneSquareAlt />
                </div>
                <div className="hero_search_phone_text">
                  <p>08386322</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>

            {isHome && (
              <div className="hero_items">
                <div className="hero_text">
                  <span>
                    Trái cây tươi
                    <h2>
                      Rau củ quả
                      <br />
                      Sạch 100%
                    </h2>
                  </span>
                  <p>Miễn phí giao hàng tận nơi</p>
                  <Link to="" className="primary-button">
                    Mua ngay
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
