import { connect } from 'react-redux'
import React from 'react'
import { HashRouter as Switch, Route } from "react-router-dom"
import { Layout, Icon, BackTop } from 'antd'
import GlobalMenu from './components/menu'
import Home from 'views/Home'
import Bookmarks from 'views/Bookmarks'
import DataChart from 'views/Data/Chart'
import HeatMapBaidu from 'views/HeatMap/Baidu'
import { setVisibilityAsider } from '../actions'
import './default.scss'
const { Header, Content } = Layout
class GlobalLayout extends React.Component {
  
  toggle = () => {
    const { visibilityAsider, dispatch } = this.props
    dispatch(setVisibilityAsider(!visibilityAsider))
  }

  render() {
    const { visibilityAsider} = this.props
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <GlobalMenu data={{collapsed: visibilityAsider}}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={ visibilityAsider ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            id="content"
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
             {/* <Switch> */}
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/bookmarks" component={Bookmarks} />
                <Route path="data">
                  <Route path="/data/chart" component={DataChart}/>
                </Route>
                <Route path="heatMap">
                  <Route path="/heatMap/baidu" component={HeatMapBaidu}/>
                </Route>
                {/* <Redirect exact to="/bookmarks" /> */}
              </Switch>
              {/* </Route> */}
            {/* </Switch> */}
          </Content>
        </Layout>
        <BackTop 
          target={()=>{
            return document.getElementById("content")
          }}
        />
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  const { visibilityAsider } = state
  return {
    visibilityAsider
  }
}

export default connect(mapStateToProps)(GlobalLayout)