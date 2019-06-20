import React from 'react'
import { HashRouter as Router, Link } from "react-router-dom"
import {Layout, Menu, Icon } from 'antd'
const { SubMenu }  = Menu
const { Sider } = Layout
class GlobalMenu extends React.Component {
  state = {
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
    menuList: [{
      name: '书签管理',
      icon: 'pie-chart',
      path: 'bookmarks',
      key: '1',
    }]
    // menuList: [{
    //   name: '书签管理',
    //   icon: 'pie-chart',
    //   // path: 'bookmarks',
    //   key: '1',
    //   children: [{
    //     name: 'Vue',
    //     path: 'bookmarks',
    //     key: '1-1'
    //   }, {
    //     name: 'React',
    //     path: 'bookmarks',
    //     key: '1-2'
    //   }]
    // }, {
    //   name: '其他',
    //   path: 'bookmarks',
    //   icon: 'pie-chart',
    //   key: '2',
    // }]
  }
  getMenus = (data) => {
    return data.map(({key, icon, name, path, children}) => {
      if (!children) {
        return (
          <Menu.Item key={key}>
          {
           icon ? <Icon type={icon} /> : ''
          }
          <Router>
            <Link to={path} >{name}</Link>
          </Router>
         </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={key}
            title={
              <span>
                <Icon type={icon} />
                <span>{name}</span>
              </span>
            }
          >
          {
            this.getMenus(children)
          }
         </SubMenu>
        )
      }
    })
  }
  render() {
    const {collapsed} = this.props.data
    const menuItems = this.getMenus(this.state.menuList)
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >{!collapsed ? '书签管理系统' : '书签'}</div>
        <Menu
          defaultSelectedKeys = {this.state.defaultSelectedKeys}
          defaultOpenKeys = {this.state.defaultOpenKeys}
          mode="inline"
          theme="dark"
        >
        {menuItems}
        </Menu>
      </Sider>
    )
  }
}
export default GlobalMenu