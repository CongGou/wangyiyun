import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import moment from 'moment'
export default class OffListing extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            playlist: {},
            tracks: [],
            audioUrl:''
        })
        this.getListeningList()
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
    }
    getListeningList = () => {
        axios.get(`http://guohaucong.top:8800/top/list?idx=${3}`)
            .then(res => {
                let playlist = res.data.playlist
                let tracks = playlist.tracks
                // console.log(res.data)
                this.setState({
                    playlist,
                    tracks
                })
            }).catch(e => {
            
            })
    }
    handlePlay (id) {
        axios.get(`http://guohaucong.top:8800/song/url?id=${id}`)
            .then(res => {
                let Url = res.data.data[0].url
                this.setState({
                    audioUrl:Url
                })
            })
        // let audio = this.refs.audio
        // audio.play()
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState)

        return true
    }
    render() {
        let playlist = this.state.playlist
        let tracks = this.state.tracks;
        
        return (
            <div className={'OffListing'}>
                <div className={'OffListing_header'}>
                    <div className={'OffListing_img'}>
                        <img src={playlist.coverImgUrl} alt='' />
                    </div>
                    <div className={'OffListing_title'}>
                        <h3>{playlist.name}</h3><br/>
                        <span>最近更新：{moment(playlist.updateTime).format("MM月DD日")} （每天更新）</span>
                        <button  className={'lyrics_play'}>播放</button>
                        <audio ref={'audio'}  />
                        <button className={'comments nameCollection'}>({playlist.subscribedCount})</button>
                        <button className={'comments Forwarding'}>({playlist.shareCount})</button>
                        <button className={'comments'}>({playlist.commentCount})</button>
                    </div>
                </div>
                <div className={'GraphicalSongList'}>
                    <div className={'SongList_box'}>
                        <h2>歌曲列表</h2>
                        <span>100首歌</span>
                        <span className={'SongListplay'}>播放：{playlist.playCount}次</span>
                    </div>
                </div>
                <div className={'OffListing_Con'}>
                    <div className={'OffListing_Con_title'}>
                        <span className={'subtitle'}>标题</span>
                        <span className={'LengthIt'}>时长</span>
                        <span className={'singer'}>歌手</span>
                    </div>
                    <div className={'song100'}>
                        <ul className={'song100List'}>
                            {tracks.map((item,index) => {
                                return (
                                    <li className={'song100item'} key={index}>
                                        <span className={'song100Index'}>{index+1}</span>
                                        <img src={item.al.picUrl} alt='' />
                                        <span className={'song100Title'} onClick={this.handlePlay.bind(this, item.id)}>{item.al.name}</span>
                                        <span className={'song100Time'}>
                                            {moment(item.dt).format("mm:ss")}
                                        </span>
                                        <span className={'song100Singer'}>{item.ar[0].name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <audio src={this.state.audioUrl} ref='audio' autoPlay/>
                    </div>
                </div>
            </div>
        )
    }
}
