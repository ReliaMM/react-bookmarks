import React from 'react'
import { PageHeader, Card, Col, Row, Avatar, Icon } from 'antd'
import './index.scss'
const { Meta } = Card

class Bookmarks extends React.Component{
  state = {
    bookmarksData: [{
      name: 'Max',
      children: [{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      },{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      },{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      },{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      }]
    },{
      name: 'Echart',
      children: [{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      },{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      },{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      },{
        icon: 'github',
        name: 'GitHub',
        link: 'https://github.com/AilerM',
        desc: 'private company GitHub'
      }, {
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: 'Confluence',
        link: 'http://192.168.11.212:8098/index.action',
        desc: 'private company Confluence'
      }]
    }]
  }
  getBookMarkCardCol = (data) => {
    let str = []
    data.forEach(({ name, icon, avatar, link, desc }, index) => {
      str.push(<Col key = {index} span = {6}>
        <Card bordered = {false}>
          <Meta
            avatar = {
              icon ? <Icon type={icon} /> : <Avatar src = {avatar} />
            }
            title = {<a target = {'_blank'} href = {link}>{ name }</a>}
            description = {desc}
          />
        </Card></Col>)
    })
    return str
  }
  getBookMarkCardRow = () => {
    let data = this.state.bookmarksData
    let str = []
    data.forEach(({name, children}, index) => {
      str.push(<div key = {index}>
        <PageHeader title = {name}/>
        <Row gutter = {16}>
          {this.getBookMarkCardCol(children)}
        </Row>
      </div>)
    })
    return str
  }
  render() {
    return (
      <div>
        {this.getBookMarkCardRow()}
      </div>
    )
  }
}
export default Bookmarks