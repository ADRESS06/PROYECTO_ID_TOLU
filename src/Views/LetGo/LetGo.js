import React from 'react'
import log from './Log.svg'
import './LetGo.css'
import { Button } from 'antd'

function LetGo() {
  return (
    <div className='letgo'>
        <div className='lo'><img src={log} alt='image_boton' /></div>

        <div className='go'>
            <div className='ir'>
            <h2>Go to Single Sing-On</h2>
            <Button shape='circle' type='primary' size='large'>Go!</Button>
            </div>
        </div>
    </div>
  )
}

export default LetGo