import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ConTop extends Component {
    constructor(arg) {
        super(arg);
        this.state = ({
            banners: []
        })
        this.getData()
        
    }
    getData = () => {
        axios.get(`http://guohaucong.top:8800/banner`).then(res => {
            const banners = res.data.banners
            this.setState({
                banners: banners
            })
        })
    }
    render() {
        // console.log(this.props.banners)
        // const banners = this.props.banners
        
        return (
            <div className={'ConTop'}>
                <div className={'banner_left'}>
                    <Carousel autoplay effect="fade">
                        {
                            this.state.banners.map((item, index) => {
                                return (
                                    <div key={index} className="img_box">
                                        <Link to={'/home/discover'}>
                                            <img src={item.imageUrl} alt=''/>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className={'banner_right'}>
                    <Link to={'/home/discover'}>
                        <img src={'https://s2.music.126.net/style/web2/img/index/download.png?4a6847098aaa936dca2bca2afcc502d7'} alt=''/>
                        <span className={'DownloadSpan'}>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
                    </Link>
                </div>
            </div>
        )
    }
}
