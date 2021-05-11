import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import { Row, Col, Input, Form, Button, Divider, Menu } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
function Main() {
  return (
    <>
      <div style={{ border: "5px solid yellow", width: "100%" }}>
        <Row
          gutter={[8, 8]}
          style={{ border: "3px solid green", width: "100%" }}
        >
          {/* <div
          style={{ width: "500px", height: "350px", border: "3px solid green" }}
        ></div> */}
          <Col span={12} style={{ border: "2px solid blue", width: "100%" }}>
            1
            <LoadingOutlined style={{ fontSize: "100px" }} />
          </Col>
          <Col span={12} style={{ border: "2px solid blue" }}>
            2
          </Col>
        </Row>
      </div>
      <Menu>
        <Menu.Item key="mail">
          <Link to="/mail">MAIL</Link>
        </Menu.Item>
        <Menu.Item key="subscription">
          <a href="/subscription">Subscription</a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Main;
