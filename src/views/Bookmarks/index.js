import React from 'react'
import PropTypes from 'prop-types'
import { getBookMarks } from 'src/service/bookmarks'
import BookmarksTop from './component/top'
import BookmarksTable from './component/table'
import BookmarksCard from './component/card'
import './index.scss'

class Bookmarks extends React.Component {
  state = {
    isGrid: true,
    bookmarksData: []
  }
  static childContextTypes = {
    currentSelectLink: PropTypes.string,
  }

  getChildContext() {
    return {
      currentSelectLink:this.state.currentSelectLink,
    }
  }

  getData = () => {
    getBookMarks({}).then(res => {
      let { data } = res.rows
      this.setState({
        bookmarksData: data
      })
    })
  }

  componentDidMount(){
    this.getData()
  }

  setGridStatus (status) {
    this.setState({
      isGrid: status
    })
  }
  setSelectLink (data) {
    this.setState({
      currentSelectLink: data
    })
  }
  render() {
    let data = {bookmarksData: this.state.bookmarksData}
    return (
      <div> 
        <BookmarksTop data={ {
          ...data,
          isGrid: this.state.isGrid,
        } } 
        setGridStatus={this.setGridStatus.bind(this)}
        setSelectLink={this.setSelectLink.bind(this)}
        />
        { this.state.isGrid 
          ? <BookmarksCard data={ data }/>
          : <BookmarksTable data={ data }/> }
      </div>
    )
  }
}
export default Bookmarks