import React from 'react'
import {
  Chart,
  Geom,
  Tooltip,
  Legend,
  Guide,
} from "bizcharts"
const { Image } = Guide

class HeatMap extends React.Component {
  
  render() {
    // let { heatMapData } = this.props.data
    return (
      <div>
         <Chart
          height={window.innerHeight}
          padding={[0, 30, 60, 30]}
          // data={ heatMapData}
          forceFit
        >
          <Tooltip showTitle={false} />
          <Legend offset={10} />
          <Geom
            type="heatmap"
            position="g*l"
            color={[
              "tmp",
              "#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2"
            ]}
          />
          <Guide>
            <Image
              start={["min", "max"]}
              end={["max", "min"]}
              src="https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png"
            />
          </Guide>
        </Chart>
      </div>
    )
  }
}
export default HeatMap