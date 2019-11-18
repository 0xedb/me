import React from 'react'
import {Tabs, Icon} from 'antd';
const {TabPane} = Tabs; 
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./Home'))
const About = dynamic(() => import('./About'))
const Work = dynamic(() => import('./Work'))
const Fun = dynamic(() => import('./Fun'))
const Blog = dynamic(() => import('./Blog'))



const style = <style>{`  
  .ant-tabs-nav-container {
    position: sticky;
    top: 0;
    background: #ffff;
    display: flex;
    justify-content: center;
  }

  .home-tab {
      height: 26px;
  }

  `}</style>
 
function NavTab() {
    return (
        <>
        <Tabs defaultActiveKey="0"  className="tabs  min" size='small' tabBarGutter={1} >
        <TabPane tab={<Icon type="bulb" />} key="0">
      <Home />
    </TabPane>
    <TabPane tab="about" key="1">
      <About />
    </TabPane>
    <TabPane tab="work" key="2">
      <Work />
    </TabPane>
    <TabPane tab="fun" key="3">
     <Fun />
    </TabPane>
    <TabPane tab="blog" key="4">
      <Blog />
    </TabPane>
    </Tabs> 
    {style}
    </>
    )
}

export default NavTab
