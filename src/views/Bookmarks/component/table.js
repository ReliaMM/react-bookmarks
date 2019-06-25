import React from 'react'
import { Table, Icon, Avatar } from 'antd'
const columns = [
  {
    title: '分类',
    dataIndex: 'type',
    width: 80,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 150
  },
  {
    title: '描述',
    dataIndex: 'desc'
  },
  {
    title: '图标',
    dataIndex: 'icon',
    render: (icon, {avatar}) => {
      return (
        icon ? <Icon type={icon} /> : <Avatar src = {avatar} />
      )
    }
  },
  {
    title: '链接',
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
    let { bookmarksData } = this.props.data
    this.handlerTableData(bookmarksData)
  }

  render() {
    return (
      this.getBookMarkTable()
    )
  }
}
export default BookmarksTable