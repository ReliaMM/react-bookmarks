import React from 'react'
import './index.scss'
import ChartBar from './component/bar/chartBar'
import ChartPie from './component/pie/chartPie'
class DataChart extends React.Component {
  state = {
    chartMap: [ChartBar, ChartPie]
  }
  getChartItem = () => {
   return this.state.chartMap.map((item, index) => {
     return (
      <div key={index} className="base__chart">
        {item()}
      </div>
     )
    })
  }
  render() {
    return (
      <div>
        {this.getChartItem()}
      </div>
    )
  }
}
export default DataChart