import React from 'react'
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
  
  render() {
    let data = {bookmarksData: this.state.bookmarksData}
    return (
      <div> 
        <BookmarksTop data={ {...data, isGrid: this.state.isGrid } } setGridStatus={this.setGridStatus.bind(this)}/>
        { this.state.isGrid 
          ? <BookmarksCard data={ data }/>
          : <BookmarksTable data={ data }/> }
      </div>
    )
  }
}
export default Bookmarks