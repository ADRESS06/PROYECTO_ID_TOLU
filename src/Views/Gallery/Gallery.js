import React from 'react'
import './Gallery.css'
import Waves from './Waves.svg'
import { Carousel,Image } from 'antd'

const Gallery = () => {
  return (
    <>
      <img src={Waves} alt='wave'/>
      <div className='gallery'>
          <h2>Gallery</h2>
          <div className='divider'/>
          <div className='gall'>
          <Carousel autoplay>
            <div>
              <Image className='image' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt='imagen'/>
            </div>
            <div>
              <Image className='image' src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' alt='imagen'/>
            </div>
            <div>
              <Image className='image' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt='imagen'/>
            </div>
            <div>
              <Image className='image' src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' alt='imagen'/>
            </div>
            <div>
              <Image className='image' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt='imagen'/>
            </div>
          </Carousel>
          </div>
      </div>
    </>
  )
}

export default Gallery