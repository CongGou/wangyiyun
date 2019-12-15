import React, { Component } from 'react'
import './index.css'
import HorizontailLine from '../HorizontalLine'
import Comments from '../comments'
import axios from 'axios'
import moment from 'moment'
export default class PlaylistDetail extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            playlist: {
                creator: {},
                tracks:[],
                tags:[]
            },
            comments: [],
            Total:0
        })
        const id = this.props.match.params.id
        this.getPlayListDetail(id)
        this.getPlayListComments(id)
    }
    getPlayListDetail = (id) => {
        axios.get(`http://guohaucong.top:8800/playlist/detail?id=${id}`)
        .then(res => {
            // console.log(res.data.playlist)
            let playlist = res.data.playlist
            this.setState({
                playlist
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
    getPlayListComments = (id) => {
        axios.get(`http://guohaucong.top:8800/comment/playlist?id=${id}`)
            .then(res => {
                console.log(res.data.comments)
                let comments = res.data.comments
                let Total = res.data.total
                this.setState({
                    comments,
                    Total
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        let playlist = this.state.playlist
        let Total = this.state.Total
        let comments = this.state.comments
        let tags = this.state.playlist.tags
        let tracks = this.state.playlist.tracks
        let tag = tags.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        })
        let track = tracks.map((item, index) => {
            return (
                <li key={index}>
                    <span className={'index'}>{index+1}</span>
                    <span className={'title items'}>{item.al.name}</span>
                    <span className={'time items'}>02:23</span>
                    <span className={'singer items'}>{item.ar[0].name}</span>
                    <span className={'album items'}>{item.name}</span>
                </li>
            )
        })
        return (
            <div className={'PlaylistDetail'}>
                <div className={'header'}>
                    <div className={'bgImg_box'}>
                        <div className={'bgImg'}>
                            <img src={playlist.coverImgUrl} alt=''/>
                        </div>
                    </div>
                    <div className={'titleBox'}>
                        <h2>{playlist.name}</h2>
                        <div className={'titleBox_user'}>
                            <img src={playlist.creator.avatarUrl} alt='' />
                            <span><a>{playlist.creator.nickname}</a> {moment(playlist.createTime).format("YYYY-MM-DD")} 创建</span>
                        </div>
                        <button className={'titleBox_play'}>播放</button>
                        <audio ref={'audio'}  />
                        <button className={'comments'}>
                            ({playlist.commentCount})
                        </button>
                        <div className={'label'}>
                            <span>标签：</span>
                            <ul>
                                {tag}
                            </ul>
                        </div>
                        <div className={'introduce'}>
                            <p>介绍：<span>{playlist.description}</span></p>
                        </div>
                    </div>
                </div>
                <div className={'PlaylistDetail_list'}>
                    <h2>歌曲列表</h2>
                    <span>{playlist.trackCount}首歌</span>
                    <span className={'Detail_play'}>播放：{playlist.playCount}次</span>
                </div>
                <HorizontailLine />
                <div className={'Playlist_list'}>
                    <div className={'Playlist_list_title'}></div>
                    <div className={'Playlist_list_con'}>
                        <ul>
                            {track}
                        </ul>
                    </div>
                </div>
                <Comments comments={comments} Total={Total}/>
            </div>
        )
    }
}
