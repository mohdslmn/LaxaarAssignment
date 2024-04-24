import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  FundOutlined,
  FileDoneOutlined ,
  StarOutlined,
  PercentageOutlined,
  PropertySafetyOutlined,
  IssuesCloseOutlined,
  CheckSquareOutlined,
  UsergroupDeleteOutlined ,
  MailOutlined ,
  FilePdfOutlined,
  MessageOutlined,
  FileImageOutlined,
  TransactionOutlined,
  ColumnHeightOutlined,
  PieChartOutlined ,
  SettingOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Service Jobs",
            key: "/service jobs",
            icon: <FundOutlined />,
          },
          {
            label: "Invoices ",
            key: "/invoices",
            icon: <FileDoneOutlined />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <  ShoppingCartOutlined />,
          },
          {
            label: "Products",
            key: "/products",
            icon: <StarOutlined /> ,
          },
          {
            label: "Offered Services",
            key: "/offered services",
            icon: <PercentageOutlined />,
          },
          {
            label: "Parts",
            key: "/parts",
            icon: <PropertySafetyOutlined />,
          },
          {
            label: "Enquiries",
            key: "/enquiries",
            icon: <IssuesCloseOutlined />,
          },
          {
            label: "Users",
            key: "/users",
            icon: <UserOutlined   />,
          },
          {
            label: "Permissions",
            key: "/permissions",
            icon: <CheckSquareOutlined />,
          },
          {
            label: "Roles",
            key: "/roles",
            icon: <UsergroupDeleteOutlined />,
          },
          {
            label: "Email Templates",
            key: "/email templates",
            icon: < MailOutlined  />,
          },
          {
            label: "PDF templates",
            key: "/pdf templates",
            icon: <FilePdfOutlined />,
          },
          {
            label: "SMS templates",
            key: "/sms templates",
            icon: <FileImageOutlined />,
          },
          {
            label: "Theming",
            key: "/theming",
            icon: <TransactionOutlined />,
          },
          {
            label: "Payment Gateways",
            key: "/payment gateways",
            icon: <ColumnHeightOutlined />,
          },
          {
            label: "Configurations",
            key: "/configurations",
            icon: <  PieChartOutlined/>,
          },
          {
            label: "Settings",
            key: "/settings",
            icon: <SettingOutlined />,
          },
      
          
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
