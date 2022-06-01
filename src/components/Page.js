import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import { setCurrentKey } from 'store/modules/currentValue/action';

const { Header, Sider, Content, Footer } = Layout;

class Page extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
    }

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleKeyClick = (link, key) => {
    this.props.setCurrentKey(key);
    window.location.assign(link);
  }

  componentDidMount() {
    this.props.setCurrentKey('1');
  }

  render() {
    return (
      <Layout>
        <Sider theme='light' trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className='logo'>
            <img src='logo.svg' style={this.state.collapsed ? { display: 'flex', margin: 'auto' } : {}} width={this.state.collapsed ? '100%' : '80%'} />
          </div>
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={[this.props.activeKey]}
            items={[
              {
                key: '1',
                icon: <img src='Q1.svg' alt='question1'/>,
                onClick: () => this.handleKeyClick('/', '1'),
                label: 'Question 1'
              },
              {
                key: '2',
                icon: <img src='Q2.svg' alt='question2'/>,
                onClick: () => this.handleKeyClick('/question2', '2'),
                label: 'Question 2'
              }
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggleCollapsed,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          <Footer className='foot-word'>
            <div className='foot-div'>
              Copyright © 2019 <p 
              style={{
                color: 'blue', 
                whiteSpace: 'break-spaces'
                }}
                > 
              PT Moduit Digital Indonesia. 
              </p> All right reserved
            </div>
            </Footer>
        </Layout>
      </Layout>
    )
  }

}

const mapStateToProps = state => ({
  activeKey: state.current.activeKey
});

export default connect(mapStateToProps, { setCurrentKey })(Page);