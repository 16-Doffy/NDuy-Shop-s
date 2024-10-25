import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/users/homepages";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import Profile from "./pages/users/Profile";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepages />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profile />,
    },
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
