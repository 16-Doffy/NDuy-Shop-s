import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/users/homepages";
import Profile from "./pages/users/Profile";
import ListProduct from "./pages/users/ListProduct";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import DetailPage from "./pages/users/DetailPage";
import ShoppingCardPage from "./pages/users/ShoppingCardPage";

const renderUserRouter = () => {
  const userRouters = [
    { path: ROUTERS.USER.HOME, component: <Homepages /> },
    { path: ROUTERS.USER.PROFILE, component: <Profile /> },
    { path: ROUTERS.USER.PRODUCT, component: <ListProduct /> },
    { path: ROUTERS.USER.DETAILPRODUCT, component: <DetailPage /> },
    { path: ROUTERS.USER.SHOPPING_CARD, component: <ShoppingCardPage /> },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;