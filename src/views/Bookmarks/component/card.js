import React from 'react'
import { PageHeader, Card, Col, Row, Avatar, Icon } from 'antd'
const { Meta } = Card
class BookmarksCard extends React.Component{
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
            description = {<span title={desc}>{desc}</span>}
          />
        </Card></Col>)
    })
    return str
  }

  getBookMarkCardRow = (data) => {
    let str = []
    data && data.forEach(({name, children}, index) => {
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
    let { bookmarksData } = this.props.data
    return (
      this.getBookMarkCardRow(bookmarksData)
    )
  }
}
export default BookmarksCard