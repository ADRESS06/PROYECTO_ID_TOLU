import React from 'react'
import './Descriptions.css'
import { Card } from 'antd';

const Descriptions = () => {
  return (
    <div className='descriptions'>
        <h2>Descriptions</h2>
        <div className='divider'/>
        <div className='des'>
        <Card title="titulo1" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
        </Card>

        <Card title="titulo2" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
        </Card>

        <Card title="titulo3" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
        </Card>
        <Card title="titulo4" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
        </Card>
        </div>
    </div>
  )
}

export default Descriptions