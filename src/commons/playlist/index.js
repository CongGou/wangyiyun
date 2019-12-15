import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

export default class Playlist extends Component {
    
    render() {
        
        let Data = this.props.Playlist
        let nickname = this.props.nickname
        const list = Data.map((item, index) => {
            
            const playCount = (item.playCount) / 10000
            // console.log(playCount)
            return (
                <li className={'Con_list_item list_item '} key={index}>
                    <Link to={'/home/playlistdetail/' + item.id}>
                        <img className={'Con_list_img ImgTop'} alt='' />
                        <img className={'Con_list_img'} src={item.coverImgUrl} alt='' />
                        <p className='play'>
                            <Icon className={'Icon'} type="customer-service" />
                            <span>{playCount < 1 ? playCount * 10000 : parseInt(playCount) +'万'}</span>
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
            <div className={'Playlist'}>
                <div className={'Con_discover_box'}>
                    <div className={'Hot_Recommended'}>
                        <Link to='/home/playlist' className={"Hot"}><h1>{nickname}</h1></Link>
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
