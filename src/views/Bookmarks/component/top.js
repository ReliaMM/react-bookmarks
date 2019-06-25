import React from 'react'
import { Switch, Select, Button } from 'antd'
const { Option } = Select

class BookmarksTop extends React.Component {
  state = {
    currentSelectLink : ''
  }
  getTopSelectOptions = (data) => {
    return data && data.map(({children, name}) => {
      return children.map((d, i) => 
        <Option key={d.link} data-link={d.link}>{d.name}</Option>
      )
    })
  }

  enterLink = () => {
    window.open(this.state.currentSelectLink)
  }

  onChange = (value) => {
    this.props.setSelectLink(value)
    this.setState({
      currentSelectLink: value
    })
  }

  onChangeSwitch = (checked) => {
    this.props.setGridStatus(checked)
  }

  render() {
    let { isGrid, bookmarksData} = this.props.data
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
         {this.getTopSelectOptions(bookmarksData)}
        </Select>
        <Button type="ailer-default"
          onClick={this.enterLink}
        >跳转</Button>
        <Switch className="pull-right" checkedChildren="列表" unCheckedChildren="表格" defaultChecked={isGrid}
          onChange={this.onChangeSwitch}
        />
      </div>
    )
  }
}
export default BookmarksTop