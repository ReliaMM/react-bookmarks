import React from 'react'
import { HashRouter as Switch, Route, Redirect } from "react-router-dom"
import { Layout, Icon } from 'antd'
import GlobalMenu from './components/menu'
import Home from 'views/Home'
import Bookmarks from 'views/Bookmarks'
import './default.scss'
const { Header, Content } = Layout

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
        <GlobalMenu data={{collapsed: this.state.collapsed}}/>
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
             <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bookmarks" component={Bookmarks} />
              <Redirect exact to="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default GlobalLayout