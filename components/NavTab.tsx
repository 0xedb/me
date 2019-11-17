import React from 'react'
import {Tabs} from 'antd';
const {TabPane} = Tabs; 
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./Home'))

const style = <style>{` 
  
  .tab-content {
      background: wheat;
  }

  .ant-tabs-nav-container {
    position: sticky;
    top: 0;
    background: #ffff;
  }

  .home-tab {
      height: 26px;
  }

  

  `}</style>

function NavTab() {
    return (
        <>
        <Tabs defaultActiveKey="0"  className="centered min" size='small' tabBarGutter={1} >
        <TabPane tab={<img className='home-tab' src="https://img.icons8.com/nolan/64/000000/home-page.png" />} key="0">
      <Home />
    </TabPane>
    <TabPane tab="about" key="1">
      <div className="tab-content">hey</div> 1
    </TabPane>
    <TabPane tab="work" key="2">
      <div className="tab-content">hey</div> 2
    </TabPane>
    <TabPane tab="fun" key="3">
      <div className="tab-content">hey</div> 3
    </TabPane>
    <TabPane tab="blog" key="4">
      <div className="tab-content">hey</div> k3
    </TabPane>
    </Tabs> 
    {style}
    </>
    )
}

export default NavTab
