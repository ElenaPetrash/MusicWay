import React from "react";
import { Breadcrumb, Layout, Space, Typography } from "antd";

import ListOfCards from "../../ListOfCards";
import { Header } from "../../Components/Header";
import { BaseLayout } from "../../Components/BaseLayout";
import { Search } from "../Search";
import Tittles from "../../Components/Tittle/Tittle";
import Title from "antd/es/skeleton/Title";
import { Http2ServerRequest } from "http2";

const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <BaseLayout>
      <Header />
      <Content style={{ margin: "0 0px", background: "#002140" }}>
        <Breadcrumb
          style={{
            margin: "16px 0",
            background: "rgb(1 23 45)",
            height: "250px",
          }}
        >
          <h2
            style={{
              color: "white",
              textAlign: "center",
              margin: "auto",
              marginTop: "50px",
              justifyContent: "center",
              fontSize:'44px',
              fontFamily: 'Times, "Times New Roman", Georgia, serif'

            }}
          >
            Music way
          </h2>

          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>

        <div style={{ padding: 24, minHeight: 360, background: "#002140" }}>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              margin: "auto",
              marginTop: "50px",
              fontSize:'24px'
            }}
          >
            Most popular songs in this week
          </h2>
          <ListOfCards />
          <h2
            style={{
              color: "white",
              textAlign: "center",
              margin: "auto",
              marginTop: "50px",
              fontSize:'24px',
              textDecoration:''

            }}
          >
            Last songs played
          </h2>
          <ListOfCards />
        </div>
      </Content>
    </BaseLayout>
  );
};

export default Home;
