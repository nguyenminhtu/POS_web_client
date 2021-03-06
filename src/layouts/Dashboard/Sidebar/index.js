import React, { Component, Fragment } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    //this.refs.mainPanel.scrollTop = 0;
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        breakpoint='xl'
        collapsedWidth={80}
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>
            <Icon type='pie-chart' />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='desktop' />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key='sub1'
            title={<span><Icon type='user' /><span>User</span></span>}
          >
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={<span><Icon type='team' /><span>Team</span></span>}
          >
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9'>
            <Icon type='file' />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
