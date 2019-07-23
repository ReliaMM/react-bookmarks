import React from 'react'
import { Row, Col, Button, Card, Tabs } from 'antd'
import { renderHeatMap } from 'src/service/heatMap'
// import HeatMap  from './component/heatMap'
import heatMapMultipleSheetStore from 'src/assets/images/heatMapMultipleSheetStore.png'
import heatMapMultipleSheetPosition from 'src/assets/images/heatMapMultipleSheetPosition.png'
import heatMapMultipleSheetPositionPointer from 'src/assets/images/heatMapMultipleSheetPositionPointer.png'
import './index.scss'
const { TabPane } = Tabs

class HeatMapBaidu extends React.Component {
  state = {
    HeatMapBtnLoading: false
  }
  tabChange = () => {

  }
  HeatMapAction = () => {
    this.setState({
      HeatMapBtnLoading: true,
      HeatMapJSON: '',
      heatMapParse: ''
    })
    renderHeatMap().then(res => {
      let data = res.rows
      // console.log(data)
      var jdata = JSON.stringify(data, null, 4);
      this.setState({
        HeatMapJSON: '<pre>'+jdata+'</pre>',
        heatMapParse: data
      })
    }).catch(()=>{
      console.log('error')
    }).finally(()=>{
      this.setState({
        HeatMapBtnLoading: false
      })
    })
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.tabChange}>
          <TabPane tab="特约店" key="1">
            <Row>
              <h2>多特约店多客户类型多Sheet</h2>
              <Col span={12}>
                <img className="heatmap__col heatmap__excel-img" src={heatMapMultipleSheetStore} alt="热力图Excel模版"/>
              </Col>
              <Col span={12}>
                <Card title="JSON格式" bordered={false}>
                <div className="heatmap__col heatmap__excel-json"
                    dangerouslySetInnerHTML={{ 
                      __html: this.state.HeatMapJSON
                    }}
                >
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Button type="link"
              // loading={this.state.HeatMapBtnLoading}
              href="/api/renderHeatMap" 
              target="_blank"
              // onClick={this.HeatMapAction}
              >生成热力图</Button>
            </Row>
            <Row>
              <Button type="link" href="/api/downloadFile">模版下载</Button>
            </Row>
          </TabPane>
          <TabPane tab="位置信息" key="2">
          <Row>
          <h2>多Excel固定Sheet带点位置信息</h2>
          <Row>
            <Col span={12}>
              <img className="heatmap__col heatmap__excel-img" src={heatMapMultipleSheetPosition} alt="热力图Excel模版"/>
            </Col>
            <Col span={12}>
              <img className="heatmap__col heatmap__excel-img" src={heatMapMultipleSheetPositionPointer} alt="热力图Excel模版"/>
            </Col>
          </Row>
          <Row>
            <Button type="link"
            href="/api/renderHeatMapPositionExcel" 
            target="_blank"
            // onClick={this.HeatMapAction}
            >全部热力图-百度</Button>
            <Button type="link"
            href="/api/renderHeatMapPositionExcelSelf" 
            target="_blank"
            >本省热力图-百度</Button>
         </Row>
         <Row>
            <Button type="link"
            href="/api/renderHeatMapPositionExcel?type=amap" 
            target="_blank"
            >全部热力图-高德</Button>
            <Button type="link"
            href="/api/renderHeatMapPositionExcelSelf?type=amap" 
            target="_blank"
            >本省热力图-高德</Button>
         </Row>
         <Row>
            <Button type="link"
            href="/api/renderHeatMapPositionExcel?type=amap3D" 
            target="_blank"
            >全部热力图-高德3D</Button>
            <Button type="link"
            href="/api/renderHeatMapPositionExcelSelf?type=amap3D" 
            target="_blank"
            >本省热力图-高德3D</Button>
         </Row>
        </Row>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        
        <Row>
          <div className="heatmap__chart">
            {/* <HeatMap
              data={{
                heatMapData: this.state.heatMapParse
              }}
            /> */}
          </div>
        </Row>
      </div>
    )
  }
}
export default HeatMapBaidu