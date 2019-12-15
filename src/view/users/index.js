import React, { Component } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'
import Listening from '../../commons/listening'
import axios from 'axios'
import Playlist from '../../commons/playlist'
export default class Users extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            UserData: {
                level: 0,
                profile: {},
            },
            Listening:[],
            Playlist: [],
        })
        const id = this.props.match.params.id
        // console.log(id)
        this.getUserData(id)
        this.getListening(id)
        this.CreatePlaylist(id)
    }
    getUserData = (id) => {
        axios.get(`http://guohaucong.top:8800/user/detail?uid=${id}`)
            .then(res => {
                
                let UserData = res.data
                this.setState({
                    UserData
                })
            })
            .catch(e => {

            })
    }
    getListening = (id) => {
        axios.get(`http://guohaucong.top:8800/user/record?uid=${id}&type=1`)
            .then(res => {
                // console.log(res.data)
                let Listening = res.data.weekData
                this.setState({
                    Listening
                })
            })
            .catch(e => {

            })
    }
    
    CreatePlaylist(id) {
        axios.get(`http://guohaucong.top:8800/user/playlist?uid=${id}`)
            .then(res => {
                let data = res.data.playlist
                this.setState({
                    Playlist: data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        //用户信息
        let UserData = this.state.UserData
        //播放记录
        let Listen = this.state.Listening
        //创建歌单
        let playlist = this.state.Playlist
        return (
            <div className={'Users'}>
                <Layout className={'ConWrap'}>
                    <div className={'Users_head'}>
                        <div className={'Users_pic'}>
                            <img src={UserData.profile.avatarUrl} alt=''/>
                        </div>
                        <div className={'Users_dataset'}>
                            <div className={'Users_top'}>
                                <h2>{UserData.profile.nickname || this.props.match.params.id}</h2>
                                <span className={'VIP'}>{UserData.level}</span>
                                <i className={'direct_icon'}></i>
                                <button className={'direct'}>发私信</button>
                                <button className={'focus'}>关注</button>
                            </div>
                            <div className={'information'}>
                                <ul>
                                    <li>
                                        <span className={'num'}>{UserData.profile.eventCount||0}
                                        </span>
                                        <span className={'information_font dynamic'}>
                                            动态
                                        </span>
                                    </li>
                                    <li>
                                        <span className={'num'}>
                                            {UserData.profile.follows||0}
                                        </span>
                                        <span className={'information_font takefocus'}>关注</span>
                                    </li>
                                    <li>
                                        <span className={'num'}>
                                            {UserData.profile.followeds||0}
                                        </span>
                                        <span className={'information_font Fans'}>粉丝</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={'Introduced'}
                                >
                                个人介绍：{UserData.profile.signature || '什么都没有'}
                            </div>
                        </div>
                    </div>
                    <div className={'Listening'} ref={'Show'}>
                        <Listening Listening={Listen} />

                        <div className={'anymore'} >
                            <Link to={'/listener/' + this.props.match.params.id}>查看更多>></Link>
                        </div>
                    </div>
                    <div>
                        <Playlist
                            UserData={UserData}
                            Playlist={playlist} />
                    </div>
                </Layout>
            </div>
        )
    }
}
