import React, { Component } from 'react';
import Jheader from './Components/Jheader'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    console.log(this.props.children)
    return (
      <Layout className="layout">
        <Jheader />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
