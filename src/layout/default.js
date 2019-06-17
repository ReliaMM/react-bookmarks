import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { Layout, Icon } from 'antd'
import GlobalMenu from './components/menu'
import './default.css'
const { Header, Sider, Content } = Layout

class About extends React.Component{
  render() {
    return <h3>About</h3>
  }
}

class GlobalLayout extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >{!this.state.collapsed ? '书签管理系统' : '书签'}</div>
          <GlobalMenu/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
             <Router>
              <Link to="/about" >go to about</Link>
              <Route path="/about" component={About} />
            </Router>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default GlobalLayout