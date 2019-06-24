import React from 'react'
import { Table, Switch, Select, PageHeader, Card, Col, Row, Avatar, Icon, Button } from 'antd'
import './index.scss'
import {getBookMarks} from 'src/service/bookmarks'
const { Option } = Select
const { Meta } = Card

const columns = [
  {
    title: '分类',
    dataIndex: 'type',
    width: 80,
    key: 'type'
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 150,
    key: 'name'
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc'
  },
  {
    title: '图标',
    dataIndex: 'icon',
    key: 'avatar',
    render: (icon, {avatar}) => {
      return (
        icon ? <Icon type={icon} /> : <Avatar src = {avatar} />
      )
    }
  },
  {
    title: '链接',
    key: 'link',
    dataIndex: 'link',
    width: 150,
    render: link => <a href={link} target={'_blank'}>{link}</a>
  }
];
class Bookmarks extends React.Component{

  state = {
    currentSelectDataLink: '',
    isGrid: true,
    tableDataSource: [],
    bookmarksData: []
  }
  getData = () => {
    getBookMarks({}).then(res => {
      let { data } = res.rows
      this.setState({
        bookmarksData: data
      })
      this.handlerTableData(data)
    })
  }
  handlerTableData = (data) => {
    let arr = data.reduce((acc, {name, children}) => {
      return acc.concat(...children.map(item => {
        return { ...item, type: name }
      }))
    }, [])
    this.setState({
      tableDataSource: arr
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
        <Option key={d.link} data-link={d.link}>{d.name}</Option>
      )
    })
  }
  enterLink = () => {
    window.open(this.state.currentSelectDataLink)
  }
  onChange = (value) => {
    this.setState({
      currentSelectDataLink: value
    })
  }
  onChangeSwitch = (checked) => {
    this.setState({
      isGrid: checked
    })
  }
  componentDidMount(){
    this.getData()
  }
  getBookMarkTable () {
    return (
      <Table
      className="section__table"
      dataSource={this.state.tableDataSource}
      scroll = {{y: 440}}
      columns={columns} />
    )
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
        <Button type="ailer-default"
          onClick={this.enterLink}
        >跳转</Button>
        <Switch className="pull-right" checkedChildren="列表" unCheckedChildren="表格" defaultChecked={this.state.isGrid}
          onChange={this.onChangeSwitch}
        />
        {this.state.isGrid ? this.getBookMarkCardRow() : this.getBookMarkTable()}
      </div>
    )
  }
}
export default Bookmarks