import React from 'react'
import { Select, PageHeader, Card, Col, Row, Avatar, Icon } from 'antd'
import './index.scss'
// import bookmarksData from 'src/data/bookmarksData.js'
import {getBookMarks} from 'src/service/bookmarks'
const { Option } = Select
const { Meta } = Card

class Bookmarks extends React.Component{
  state = {
    // bookmarksData: bookmarksData.data
  }
  getData = () => {
    getBookMarks({}).then(res => {
      let { data } = res.rows
      this.setState({
        bookmarksData: data
      })
    })
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
            description = {<span title={desc}>{desc}</span>}
          />
        </Card></Col>)
    })
    return str
  }
  getBookMarkCardRow = () => {
    let data = this.state.bookmarksData
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
  getTopSelectOptions = () => {
    let data = this.state.bookmarksData
    return data && data.map(({children, name}) => {
      return children.map((d, i) => 
        <Option key={name + i}>{d.name}</Option>
      )
    })
  }
  onChange = (value) => {
    console.log(`selected ${value}`)
  }
  componentDidMount(){
    this.getData()
  }
  render() {
    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="搜索"
          optionFilterProp="children"
          onChange={this.onChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
         {this.getTopSelectOptions()}
        </Select>
        {this.getBookMarkCardRow()}
      </div>
    )
  }
}
export default Bookmarks