import React from 'react'
import { HashRouter as Router, Link } from "react-router-dom"
import {Layout, Menu, Icon } from 'antd'
import avocado from 'src/assets/images/avocado.svg'
import { withRouter} from  'react-router-dom'
const { SubMenu }  = Menu
const { Sider } = Layout
class GlobalMenu extends React.Component {
  
  state = {
    menuList: [{
      name: '书签管理',
      icon: 'unordered-list',
      path: '/bookmarks',
      key: '1',
    },{
      name: '可视化工具',
      icon: 'pie-chart',
      key: '2',
      path: '/data',
      children: [{
        name: '图表',
        path: '/chart',
        key: '2-1'
      }]
    }]
  }
  setDefaultMenu = (lacationHash) => {
    let hash = lacationHash.split('/')
    let parentHash = hash[1]
    let childHash = hash[2]
    let defaultOpenKeys = ''
    let defaultSelectedKeys = ''
    if (parentHash) {
      defaultOpenKeys = this.state.menuList.filter(item => item.path === '/' + parentHash)[0]
    }
    if (childHash) {
      defaultSelectedKeys = defaultOpenKeys.children.filter(item => item.path === '/' + childHash)[0]
    }
    return {
      defaultOpenKeys: [defaultOpenKeys ? defaultOpenKeys.key : ''],
      defaultSelectedKeys: [defaultSelectedKeys ? defaultSelectedKeys.key : defaultOpenKeys ? defaultOpenKeys.key : '']
    }
  }
  getMenus = (data, ParentPath = '') => {
    return data.map(({key, icon, name, path, children}) => {
      if (!children) {
        return (
          <Menu.Item key={key}>
          {
           icon ? <Icon type={icon} /> : ''
          }
          <Router>
            <Link to={`${ParentPath}${path}`} >{name}</Link>
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
            this.getMenus(children, path)
          }
         </SubMenu>
        )
      }
    })
  }

  render() {
    let { location } = this.props
    const { collapsed} = this.props.data
    const menuItems = this.getMenus(this.state.menuList)
    let { defaultOpenKeys, defaultSelectedKeys = ''} = this.setDefaultMenu(location.hash)
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >
        <img  alt="avocado" src={avocado}/>
      </div>
        <Menu
          defaultSelectedKeys = {defaultSelectedKeys}
          defaultOpenKeys = {defaultOpenKeys}
          mode="inline"
          theme="dark"
        >
        {menuItems}
        </Menu>
      </Sider>
    )
  }
}
export default withRouter(GlobalMenu)