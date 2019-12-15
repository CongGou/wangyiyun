import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import axios from 'axios'
export default class ConRight extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            artists: []
        })
        this.getInSinger()
    }
    getInSinger = () => {
        axios.get('http://guohaucong.top:8800/artist/list?cat=5001&limit=5')
        .then(res => {
            // console.log(res.data)
            const artists = res.data.artists
            this.setState({
                artists: artists
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
    render() {
        const artist = this.state.artists.map((item, index) => {
            return (
                <li className={'Singer_item'} key={index}>
                    <Link to=''>
                        <img src={item.picUrl} alt=''/>
                        <p className={'Singer'}>{item.name}</p>
                    </Link>
                </li>
            )
        })
        return (
            <div className='ConRight'>
                <div className={'user_box'} style={{display:'none'}}>
                    <div className={'userpic_box'}> 
                        <a className={'userpic'}>
                            <img src={'http://p1.music.126.net/YqmRZ1Oam3NnN93PkuCqnA==/109951163805314395.jpg?param=80y80'} />
                        </a>
                        <a className={'userName'}>
                            用户1700293819
                        </a>
                        <a className={'VIP'}>
                            6
                        </a>
                        <button className={'user_btn'}>签到</button>
                    </div>
                    <div className={'user_box_xinxi'}>
                        <p className={'frist'}>
                            <span>0</span><br/>
                            <span>动态</span>
                        </p>
                        <p>
                            <span>0</span><br />
                            <span>动态</span>
                        </p>
                        <p className={'end'}>
                            <span>0</span><br />
                            <span>动态</span>
                        </p>
                    </div>
                </div>
                <div className={'InSinger_box'}>
                    <div className={'InSinger_title'}>
                        <span><h5>入驻歌手</h5></span>
                        <span><h5 className={'InSinger_More'}>查看更多>></h5></span>
                    </div>
                    <div className={'SingerList_box'}>
                        <ul className={'SingerList'}>
                            {
                                artist
                            }
                        </ul>
                        <div className='musicians'>
                            <button >申请成为音乐人</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
