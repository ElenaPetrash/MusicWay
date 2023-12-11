import React, { ReactNode } from "react";
import { Layout } from "antd";
import { Sidebar } from "../Sidebar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout style={{ height: "100%"}}>
      <Sidebar />
      <Layout>
        {children}
        <Layout.Footer
          style={{
            textAlign: "center",
            background: "rgb(1 23 45)",
            color: "white",
          }}
        >
          About us ,About us,About us,About us,About us
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
