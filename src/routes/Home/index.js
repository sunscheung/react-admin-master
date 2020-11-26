/*
 * @Author: Suns
 * @Date: 2020-10-10 15:18:44
 * @LastEditTime: 2020-10-16 09:45:13
 */
import React from 'react'
import {Carousel} from 'antd'
import './style.css'

const imgs = [
  "https://cn.bing.com/th?id=OHR.RoaringCascade_ZH-CN7814945705_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
  "https://cn.bing.com/th?id=OHR.AmericanFlyer_ZH-CN7955219009_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
  "https://cn.bing.com/th?id=OHR.RoaringCascade_ZH-CN7814945705_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
  "https://cn.bing.com/th?id=OHR.AmericanFlyer_ZH-CN7955219009_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
];

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        <Carousel arrows effect='fade' className='size'>
          {imgs.map(item=><div key={item}><div className='size' style={{backgroundImage:`url(${item})`}}/></div>)}
          {/*不用img标签是因为图片大小会出现问题*/}
        </Carousel>
      </div>
    )
  }
}

const styles = {
  bg:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'calc(100vh - 64px)'
  }
}

export default Home