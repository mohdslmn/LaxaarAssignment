import {
  BellFilled,
  MailOutlined,
  CloseSquareFilled,
  MenuFoldOutlined,
  FileTextOutlined,
  DownOutlined,
  GlobalOutlined,
  LogoutOutlined 
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Drawer,
  Dropdown,
  Image,
  List,
  Space,
  Typography,
} from "antd";
import { useEffect, useState } from "react";


function AppHeader() {
  
 
  
  return (
    <>
    <div className="AppHeader">
      <div className="HeaderLeft">
        <div style={{ marginLeft: "20px" }}>
          <MenuFoldOutlined style={{ margin: "10px" }} />
          <CloseSquareFilled
            style={{
              width: "18px",
              height: "18px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          />
          <text style={{ fontSize: "20px", fontWeight: "bold" }}>arivaa</text>
        </div>

        <div className="serviceJob">
          <text style={{ marginLeft: "100px", height: "14px" }}>
            service job
          </text>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{
            display: "inline-block",
            backgroundColor: "#F87060",
            borderRadius: "15px",
            marginRight: "10px", // Adjust margin-right for spacing
          }}
        >
          <FileTextOutlined /> DOCUMENTATION
        </Button>
        <Dropdown>
          <Button>
            <Space>
              <text style={{ color: "#F87060" }}>
                <GlobalOutlined style={{ margin: "5px" }} />
                English{" "}
              </text>
              <DownOutlined style={{ color: "orangered" }} />
            </Space>
          </Button>
        </Dropdown>

        <Image
          width={40}
          src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
          style={{
            height: "40px",
            margin: "10px",
            borderRadius: "50%",
            border: "2px solid orange",
          }}
        />
      </div>
      
    </div>
    <div className="popUp">
     <div className="image-text">
    <Image
      width={40}
      src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
      style={{
        borderRadius: "50%",
        border: "2px solid orange",
      }}
    />
    <div className="popUpText">
    <p style={{marginLeft:"15px"}}>User15432</p>
    <p style={{marginLeft:"15px",borderBottom:"1px solid black",fontSize:"10px"}}>User15432@gzp.ru</p>
    </div>
    
    </div>
    <div className="popUpButton">
    <Button style={{background:"orangered"}}>
    <LogoutOutlined />
    Sign Out</Button>
  </div>
   
    </div>
   
  </>
  );
}
export default AppHeader;
