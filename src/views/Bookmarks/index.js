import React from 'react'
import { Switch, Select, Button } from 'antd'
import { getBookMarks } from 'src/service/bookmarks'
import BookmarksTable from './component/table'
import BookmarksCard from './component/card'
import './index.scss'
const { Option } = Select

class Bookmarks extends React.Component{
  state = {
    currentSelectDataLink: '',
    isGrid: true,
    bookmarksData: []
  }
  getData = () => {
    getBookMarks({}).then(res => {
      let { data } = res.rows
      this.setState({
        bookmarksData: data
      })
    })
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
        {this.state.isGrid 
          ? <BookmarksCard data={{bookmarksData: this.state.bookmarksData}}/>
          : <BookmarksTable data={{tableData: this.state.bookmarksData}}/> }
      </div>
    )
  }
}
export default Bookmarks