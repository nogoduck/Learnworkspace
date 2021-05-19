import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import { Row, Col, Input, Form, Button, Divider, Menu, Typography } from "antd";
import {
  LoadingOutlined,
  GitlabOutlined,
  ThunderboltTwoTone,
} from "@ant-design/icons";

const { Text, Title } = Typography;

function Main() {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/mail">MAIL</Link>
        </Menu.Item>
        <Menu.Item key="subscription">
          <a href="/subscription">Subscription</a>
        </Menu.Item>
      </Menu>
      <div style={{ height: "300px", border: "5px solid red" }}>
        <Row
          // align="middle"
          gutter={[8, 8]}
          justify="center"
          style={{ border: "3px solid green" }}
        >
          <Col span={6} style={{ border: "2px solid blue" }}>
            <Divider>default</Divider>
            <Divider orientation="center">center</Divider>
            <Divider orientation="left">left</Divider>
            <Divider orientation="right">right</Divider>
          </Col>
          <Col span={6} style={{ border: "2px solid blue" }}>
            <LoadingOutlined style={{ color: "orange" }}></LoadingOutlined>
            <GitlabOutlined style={{ color: "green" }} />
            <ThunderboltTwoTone
              twoToneColor="orangered"
              style={{
                fontSize: "32px",
              }}
            />
          </Col>
          <Col
            span={6}
            style={{
              border: "2px solid blue",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              flexWrap: "wrap",
            }}
          >
            <Button type="primary">Submit</Button>
            <Button type="dashed">Submit</Button>
            <Button type="text">Submit</Button>
            <Button type="link">Submit</Button>
          </Col>
          <Col span={6} style={{ border: "2px solid blue" }}>
            <Text keyboard>ESC</Text>
            <Text keyboard>↑</Text>
            <Text keyboard>W</Text>
            <br />
            <Title level={5}>How open the Task Manager ? </Title>
            <Text keyboard>Ctrl</Text> + <Text keyboard>Shift</Text> +{" "}
            <Text keyboard>Esc</Text>
          </Col>
        </Row>
        <Row
          gutter={[8, 8]}
          justify="center"
          style={{ border: "3px solid green" }}
        >
          <Col span={6} style={{ border: "2px solid blue" }}>
            1
          </Col>
          <Col span={6} style={{ border: "2px solid blue" }}>
            2
          </Col>
          <Col span={6} style={{ border: "2px solid blue" }}>
            3
          </Col>
          <Col span={6} style={{ border: "2px solid blue" }}>
            4
          </Col>
        </Row>
        <Row
          // align="middle"
          gutter={[8, 8]}
          justify="center"
          style={{ border: "3px solid green" }}
        >
          <Col span={3} style={{ border: "2px solid blue" }}>
            1
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            2
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            3
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            4
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            5
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            6
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            7
          </Col>
          <Col span={3} style={{ border: "2px solid blue" }}>
            8
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Main;
