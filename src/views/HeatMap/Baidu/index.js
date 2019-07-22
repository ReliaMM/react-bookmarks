import React from 'react'
import { Row, Col, Button, Card, Tabs } from 'antd'
import { renderHeatMap } from 'src/service/heatMap'
// import HeatMap  from './component/heatMap'
import heatMapMultipleSheetShop from 'src/assets/images/heatMapMultipleSheetShop.png'
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
          <TabPane tab="多特约店多客户类型多Sheet" key="1">
            <Row>
              <Col span={12}>
                <img className="heatmap__col heatmap__excel-img" src={heatMapMultipleSheetShop} alt="热力图Excel模版"/>
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
              <Button type="link" href="/api/downloadFile">模版下载</Button>
            </Row>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Row>
          <Button type="link"
          // loading={this.state.HeatMapBtnLoading}
          href="/api/renderHeatMap" 
          target="_blank"
          // onClick={this.HeatMapAction}
          >生成热力图</Button>
        </Row>
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