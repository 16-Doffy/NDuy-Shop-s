import { memo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'; 
import "./style.scss";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0); // Trạng thái cho tab hiện tại

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Dữ liệu cho sản phẩm theo loại
  const products = {
    all: [
      { img: "/categories/cam.jpg", name: "Nước ép cam tươi" ,price:34000},
      { img: "/categories/chanhvang.jpg", name: "Chanh vàng",price:12000 },
      { img: "/categories/eptao.jpg", name: "Nước ép táo",price:22000 },
      { img: "/categories/xoai.jpg", name: "Xoài" ,price:29000},
      { img: "/categories/thapcam.jpg", name: "Thập cẩm",price:20000 },
    ],
    Cam: [
      { img: "/categories/cam.jpg", name: "Nước ép cam tươi" },
    ],
    Chanh: [
      { img: "/categories/chanhvang.jpg", name: "Chanh vàng",price:12000 },
    ],
    Tao: [
      { img: "/categories/eptao.jpg", name: "Nước ép táo",price:22000 },
    ],
    Xoai: [
      { img: "/categories/xoai.jpg", name: "Xoài" ,price:29000},
    ],
  };

  return (
    <>
      {/*Categories begin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/bo.jpg)` }} // Absolute path
          >
            <p>Bơ ngọt</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/dua.jpg)` }} // Absolute path
          >
            <p>Dừa tươi</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/kiwi.jpg)` }} // Absolute path
          >
            <p>Kiwi xanh</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/luou.jpg)` }} // Absolute path
          >
            <p>Lượu ngọt</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/xoai.jpg)` }} // Absolute path
          >
            <p>Xoài chín</p>
          </div>
          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/ep tao.jpg)` }} // Absolute path
          >
            <p>Táo xanh </p>
          </div>
          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/thapcam.jpg)` }} // Absolute path
          >
            <p>Thập cẩm</p>
          </div>
        </Carousel>
      </div>
      {/*Categories end*/}

      {/*Featured begin*/}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>

          {/* Chèn Tabs vào đây */}
          <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
            <TabList className="tab_name">
              <Tab  >Tất cả sản phẩm</Tab>
              <Tab>Cam</Tab>
              <Tab>Chanh</Tab>
              <Tab>Táo</Tab>
              <Tab>Xoài</Tab>
       
            </TabList>

            <TabPanel>
              <h2>Tất cả sản phẩm</h2>
              <div className="product-grid">
                {products.all.map((product, index) => (
                  <div key={index} className="product-item">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p className="product-price">{product.price} VNĐ</p>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h2>Cam</h2>
              <div className="product-grid">
                {products.Cam.map((product, index) => (
                  <div key={index} className="product-item">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p className="product-price">{product.price} VNĐ</p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Chanh Vàng</h2>
              <div className="product-grid">
                {products.Chanh.map((product, index) => (
                  <div key={index} className="product-item">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p className="product-price">{product.price} VNĐ</p>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h2>Táo</h2>
              <div className="product-grid">
                {products.Tao.map((product, index) => (
                  <div key={index} className="product-item">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p className="product-price">{product.price} VNĐ</p>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h2>Xoài</h2>
              <div className="product-grid">
                {products.Xoai.map((product, index) => (
                  <div key={index} className="product-item">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p className="product-price">{product.price} VNĐ</p>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
          {/* Kết thúc Tabs */}
        </div>
      </div>
      {/*Featured end*/}
    </>
  );
};

export default memo(HomePage);
