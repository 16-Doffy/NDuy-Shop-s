import { memo } from "react";
import BreadCrumb from "../theme/breadCrumb";
import "./style.scss";
import q1 from "../../../asset/anh/images/luou.jpg";
import q2 from "../../../asset/anh/images/thapcam.jpg";
import q3 from "../../../asset/anh/images/xoai.jpg";
import { AiOutlineCopy, AiOutlineEye } from "react-icons/ai";
import { format } from "../../../utils/fomat";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { featProduct } from "../../../utils/common";
import ProductCart from "../ProductCard";
import Quantity from "../Quantity";
const DetailPage = () => {
  const imgs = [q1, q2, q3];
  return (
    <>
      <BreadCrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 product_detail_pic">
            <img src={q3} alt="product-pic" />
            <div className="main">
              {imgs.map((item, key) => (
                <img src={item} alt="product_detail_pic" key={key} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 product_detail_text">
            <h2>Rau củ xanh</h2>
            <div className="seen-icon">
              <AiOutlineEye />
              {`10(Lượt xem)`}
            </div>
            <h3>{format(300000)}</h3>
            <p>
              Doffy Shop's là ngành chuyên về lĩnh vực chế biến nông sản, thực
              phẩm; kiểm tra, đánh giá chất lượng nguyên liệu, bán thành phẩm và
              thành phẩm trong quá trình chế biến, bảo quản thực phẩm; nghiên
              cứu phát triển sản phẩm mới, tạo nguyên liệu mới trong lĩnh vực
              thực phẩm, dược phẩm và hóa học.
            </p>

                <Quantity/>


            <ul>
              <li>
                <b>Tình trạng: </b> <span>Hết hàng</span>
              </li>

              <li>
                <b>Số lượng: </b> <span>30</span>
              </li>

              <li>
                <b>Chia sẻ: </b>
                {""}
                <span>
                  <FaFacebook />
                  <FaInstagramSquare />
                  <FaYoutube />
                  <AiOutlineCopy />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product_detail_tab">
          <h4>Thông tin chi tiết</h4>

          <div>
            <ul>
              <li>
              Doffy Shop's là ngành chuyên về lĩnh vực chế biến nông sản, thực
              phẩm; kiểm tra, đánh giá chất lượng nguyên liệu, bán thành phẩm và
              thành phẩm trong quá trình chế biến, bảo quản thực phẩm; nghiên
              cứu phát triển sản phẩm mới, tạo nguyên liệu mới trong lĩnh vực
              thực phẩm, dược phẩm và hóa học.
              </li>
              <li>
              Không chỉ mở chuỗi cửa hàng, Clever Food còn vô cùng nắm bắt xu 
              hướng của thời đại khi mở ra dịch vụ tư vấn mua thực phẩm sạch online và đặt giao hàng tận nơi,
               cùng với đó là dịch vụ sơ chế thực phẩm có sẵn đối với những chị em bận rộn.
              </li>
            </ul>
          </div>

          <div className="section-title">
            <h2>Sản phẩm tương tự</h2>
          </div>
          <div className="row">
            {featProduct.all.product.map((item, key) => (
              <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <ProductCart  img={item.img} name={item.name} price={item.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(DetailPage);
