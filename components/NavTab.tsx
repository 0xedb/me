import React from 'react'
import {Breadcrumb, Icon} from 'antd'; 
import Link from 'next/link';

const style = <style>{`  
  .tabs {
    position: sticky;
    top: 0;
    background: #ffff;
    display: flex;
    justify-content: center;
    z-index: 8;
    padding: 17px 0;
  }

  .anticon {
    transform: scale(1.5);
  }

  .home-tab {
      height: 26px;
  }

  .ant-breadcrumb  {
    font-size: 20px;
  }

  `}</style>
 
function NavTab() {
    return (
        <>
        <div className='tabs centered'>
        <Breadcrumb>
        <Breadcrumb.Item><Link href='/'><a>{<Icon type='bulb' />}</a></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link href='/about'><a>about</a></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link href='/work'><a>work</a></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link href='/fun'><a>fun</a></Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link href='/blog'><a>blog</a></Link></Breadcrumb.Item>
        </Breadcrumb>
        </div> 

    {style}
    </>
    )
}

export default NavTab 
