import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { GiAbbotMeeple } from "react-icons/gi";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Quản lý sản phẩm",
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Quản lý đơn hàng",
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Quản lý tài khoản",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
];

export default dashboardRoutes;
