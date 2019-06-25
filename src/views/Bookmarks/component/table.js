import React from 'react'
import { Table, Icon, Avatar } from 'antd'
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
class BookmarksTable extends React.Component{
  state = {
    tableDataSource: []
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
  getBookMarkTable () {
    return (
      <Table
      className="section__table"
      dataSource={this.state.tableDataSource}
      scroll = {{y: 440}}
      columns={columns} />
    )
  }
  componentDidMount() {
    let { tableData } = this.props.data
    this.handlerTableData(tableData)
  }
  render() {
    return (
      this.getBookMarkTable()
    )
  }
}
export default BookmarksTable