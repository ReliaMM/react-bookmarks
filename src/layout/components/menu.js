import React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu }  = Menu
class GlobalMenu extends React.Component {
  state = {
    collapsed: false,
    menuList: [{
      name: '书签管理',
      icon: 'pie-chart',
      key: '1',
      children: [{
        name: 'Vue',
        key: '1-1'
      }, {
        name: 'React',
        key: '1-2'
      }]
    }, {
      name: '其他',
      icon: 'pie-chart',
      key: '2',
    }]
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  getMenus = (data) => {
    return data.map(({key, icon, name, children}) => {
      if (!children) {
        return (
          <Menu.Item key={key}>
            <Icon type={icon} />
            <span>{name}</span>
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
    const menuItems = this.getMenus(this.state.menuList)
    return (
        <Menu
        defaultSelectedKeys={['1-1']}
        defaultOpenKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
      >
      {menuItems}
      </Menu>
    )
  }
}
export default GlobalMenu