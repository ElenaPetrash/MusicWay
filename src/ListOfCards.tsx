import React from "react";
import { Card, Col, Row, Button } from "antd";
import ImgsListOfCard from "./ImgsListOfCards";
import { PlayCircleOutlined } from "@ant-design/icons";
import listMusic from "./Components/Search/listMusic.json"

const ListOfCards = () => {
  return (
    <Row gutter={16} style={{ background: "#002140", marginTop: "0px" }}>
      {listMusic.map((e) => (
  <Col key={e.name} span={4}>
    <Card
      title={e.name}
      headStyle={{ color: "white" }}
      style={{
        background: "rgb(1 23 45)",
        color: "white",
        height: "300px",
        width: "200px",
        margin:"10px",
        marginLeft: "10px"
      }}
      bordered={false}
    >
      <ImgsListOfCard />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "flex-end",
        }}
      >
        <div>
          <p>{e.author}</p>
          <p>{e.film + ','} {e.year}</p>
        </div>
        <div>
          <Button
            type="default"
            shape="circle"
            style={{ marginTop: "20px" }}
            icon={<PlayCircleOutlined width="20px" />}
          />
        </div>
      </div>
    </Card>
  </Col>
))}

      

      {/* <Col span={3}>
        <Card
          title="Card title"
          headStyle={{ color: "white" }}
          style={{
            background: "rgb(1 23 45)",
            color: "white",
            height: "300px",
          }}
          bordered={false}
        >
          <ImgsListOfCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "flex-end",
            }}
          >
            <div>
              <p>LinkinPark</p>
              <p>LinkinPark</p>
            </div>
            <div>
              <Button
                type="default"
                shape="circle"
                style={{ marginTop: "20px" }}
                icon={<PlayCircleOutlined width="20px" />}
              />
            </div>
          </div>
        </Card>
      </Col>
      <Col span={3}>
        <Card
          title="Card title"
          headStyle={{ color: "white" }}
          style={{
            background: "rgb(1 23 45)",
            color: "white",
            height: "300px",
          }}
          bordered={false}
        >
          <ImgsListOfCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "flex-end",
            }}
          >
            <div>
              <p>LinkinPark</p>
              <p>LinkinPark</p>
            </div>
            <div>
              <Button
                type="default"
                shape="circle"
                style={{ marginTop: "20px" }}
                icon={<PlayCircleOutlined width="20px" />}
              />
            </div>
          </div>
        </Card>
      </Col>
      <Col span={3}>
        <Card
          title="Card title"
          headStyle={{ color: "white" }}
          style={{
            background: "rgb(1 23 45)",
            color: "white",
            height: "300px",
          }}
          bordered={false}
        >
          <ImgsListOfCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "flex-end",
            }}
          >
            <div>
              <p>LinkinPark</p>
              <p>LinkinPark</p>
            </div>
            <div>
              <Button
                type="default"
                shape="circle"
                style={{ marginTop: "20px" }}
                icon={<PlayCircleOutlined width="20px" />}
              />
            </div>
          </div>
        </Card>
      </Col>
      <Col span={3}>
        <Card
          title="Card title"
          headStyle={{ color: "white" }}
          style={{
            background: "rgb(1 23 45)",
            color: "white",
            height: "300px",
          }}
          bordered={false}
        >
          <ImgsListOfCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "flex-end",
            }}
          >
            <div>
              <p>LinkinPark</p>
              <p>LinkinPark</p>
            </div>
            <div>
              <Button
                type="default"
                shape="circle"
                style={{ marginTop: "20px" }}
                icon={<PlayCircleOutlined width="20px" />}
              />
            </div>
          </div>
        </Card>
      </Col>
      <Col span={3}>
        <Card
          title="Card title"
          headStyle={{ color: "white" }}
          style={{
            background: "rgb(1 23 45)",
            color: "white",
            height: "300px",
          }}
          bordered={false}
        >
          <ImgsListOfCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "flex-end",
            }}
          >
            <div>
              <p>LinkinPark</p>
              <p>LinkinPark</p>
            </div>
            <div>
              <Button
                type="default"
                shape="circle"
                style={{ marginTop: "20px" }}
                icon={<PlayCircleOutlined width="20px" />}
              />
            </div>
          </div>
        </Card>
      </Col> */}
    </Row>
  );
};
export default ListOfCards;

///const {  Card, Col, Row  } = antd;
