import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  return (
    <>
      {/*Categories begin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/bo.jpg)` }}
          >
            <p>Bơ ngọt</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/dua.jpg)` }}
          >
            <p>Dừa tươi</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/kiwi.jpg)` }}
          >
            <p>Kiwi xanh</p>
          </div>

          <div
            className="categories_slider_item"
            style={{ backgroundImage: `url(/categories/luou.jpg)` }}
          >
            <p>Lượu ngọt</p>
          </div>
        </Carousel>
      </div>
      {/*Categories end*/}
    </>
  );
};
export default memo(HomePage);
