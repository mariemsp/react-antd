import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import List from "../components/pages/list";
import FormApp from "../components/pages/form";
import SideNav from "../components/layouts/sidebar";
import File from "../components/pages/files";
import Videos from "../components/pages/videos";
import HeaderRight from "../components/headerRight";

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;


const ApplicationRoutes = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

  const handleToggle = (event) => {
    event.preventDefault();
    collapse ? setCollapse(false) : setCollapse(true);
  }
  return (
    <Router>
      <Layout>
        <Sider
          width={256}
          trigger={null}
          collapsible
          collapsed={collapse}
        >
          <div style={{ height: '60px', display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: '36px', marginRight: '8px' }} alt="logo" src="logo.svg" />
            {!collapse && <h1 style={{ display: 'inline-block', color: 'white', marginTop: 'revert' }}>LOGO</h1>}
          </div>
          <SideNav />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: "#001529" }}>
            <div>
              {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                onClick: handleToggle,
                // style: { color: "#fff" }
                style: { fontSize: '20px', color: '#fff' }
              })}
              <HeaderRight />
            </div>


          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
            <Switch>
              <Route path="/list" component={List} />
              <Route path="/form" component={FormApp} />
              <Route path="/files" component={File} />
              <Route path="/videos" component={Videos} />
              <Redirect to="/list" from="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router >
  );
}

export default ApplicationRoutes;