import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
export default class Discover extends Component {
    render() {
        const Recommended = this.props.Recommended
        const PlaylistHot = this.props.PlaylistHot
        // console.log(PlaylistHot)
        // 热门歌单
        const Hot = PlaylistHot.map((item, index) => {
            if (index < 5) {
                return (
                    <Link to='/home/playlist' className={'classification'} key={index}>{item.name}</Link>
                )
            }
        })
        // 推荐歌单
        const list = Recommended.map((item, index) => {
            const playCount = (item.playCount) / 10000
            return (
                <li className={'Con_list_item list_item '} key={index}>
                    <Link to='/home/playlist'>
                        <img className={'Con_list_img ImgTop'} alt='' />
                        <img className={'Con_list_img'} src={item.picUrl} alt='' />
                        <p className='play'>
                            <Icon className={'Icon'} type="customer-service" />
                            <span>{parseInt(playCount)}万</span>
                            <Icon className={'Icon'} type="play-circle" />
                        </p>
                        <p>
                            {item.name}
                        </p>
                    </Link>
                </li>
            )
        })
        return (
            <div>
                <div className={'Con_discover_box'}>
                    <div className={'Hot_Recommended'}>
                        <Link to='/home/playlist' className={"Hot"}><h1>热门推荐</h1></Link>
                        {Hot}
                    </div>
                    <div className={'Hot_Con'}>
                        <ul className={'Hot_Con_list'}>
                            {
                                list
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
