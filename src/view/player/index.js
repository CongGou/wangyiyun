import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import axios from 'axios'
export default class Player extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            hidden: 'none',
            show: 'block',
            playshow: 'block',
            suspended: 'none',
            curmintime: 0,
            cursecondtime: 0,
            minutes: 0,
            second: 0,
            Url: '',

        })
        this.music()
        
    }
    handleHidden = () => {
        this.setState({
            hidden: 'block',
            show: 'none'
        })
    }
    handleShow = () => {
        this.setState({
            hidden: 'none',
            show: 'block'
        })
    }
    music = () => {
        axios.get('http://guohaucong.top:8800/song/url?id=1392990601')
        .then(res => {
            let Url = res.data.data[0].url
            // console.log(Url)
            this.setState({
                Url: Url
            })
        })
        .catch(e => {
            
        })
    }
    handlehandlePlay = (event) => {
        //获取audio
        let audio = document.getElementsByTagName('audio')[0]
         //获取播放进度条
        let playBar = document.getElementsByClassName('playBar')[0]
        let playBar_icon = document.getElementsByClassName('playBar_icon')[0]
        //存储播放分钟
        let minutes = parseInt(Math.floor(audio.duration) / 60)
        //存储播放毫秒
        let second = Math.floor(audio.duration) % 60
        
        audio.play()
        audio.addEventListener('timeupdate', () => {
            let curtime = Math.floor(audio.currentTime)
            // console.log(curtime%60)
            let mintime = parseInt(curtime / 60)
            let secondtime = curtime % 60
            this.setState({
                curmintime: mintime,
                cursecondtime: secondtime,
                minutes: minutes,
                second: second
            })
            let percent = curtime / audio.duration * 100 + '%'
            let percent_icon = curtime / audio.duration * 100-2 + '%'
            playBar.style.width = percent
            playBar_icon.style.left = percent_icon
            if (audio.paused===true) {
                playBar.style.width = 0+'%'
                playBar_icon.style.left = -2 + '%'
                this.setState({
                    playshow: 'block',
                    suspended: 'none',
                    curmintime: 0,
                    cursecondtime: 0,
                })
            }
            // console.log(audio.paused)
        })
        
        this.setState({
            playshow: 'none',
            suspended: 'block'
        })
    }
    handleSuspended = (event) => {
        let audio = document.getElementsByTagName('audio')[0]
        audio.pause()
        // console.log(audio.currentTime)
        this.setState({
            playshow: 'block',
            suspended: 'none'
        })
        
    }
    handleControls = (event) => {
        event.persist()
        let audio = document.getElementsByTagName('audio')[0]
        let controlsWidth = document.getElementsByClassName('controls')[0]
        let playBar = document.getElementsByClassName('playBar')[0]
        let playBar_icon = document.getElementsByClassName('playBar_icon')[0]
        //获取当前鼠标相对于父元素的left值
        let offset = event.nativeEvent.offsetX
        //计算偏移值相对于总宽度的比例
        let percent = offset / controlsWidth.clientWidth
        //计算这个位置的进度条值
        let curtime = percent * audio.duration
        audio.currentTime = curtime

        let percentWigth = curtime / audio.duration * 100 + '%'
        let percent_icon = curtime / audio.duration * 100 - 2 + '%'
        playBar.style.width = percentWigth
        playBar_icon.style.left = percent_icon
        // console.log(audio.paused)
    }
    render() {
        
        let hidden = this.state.hidden
        let show = this.state.show
        let playshow = this.state.playshow
        let suspended = this.state.suspended
        //已播放的时间
        let curmintime = this.state.curmintime
        let cursecondtime = this.state.cursecondtime
        //总时间
        let minutes = this.state.minutes
        let second = this.state.second
        return (
            <div className={'player_box'}>
                <div className='player'>
                    <div className={'mask'}>
                        <span onClick={this.handleHidden}
                            className={'Lock'} style={{ display: show }}></span>
                        <span onClick={this.handleShow}
                            className={'Lock Open'} style={{ display: hidden}}></span>
                    </div>
                    <div className={'controller'}>
                        <div className={'MusicPlay_box'}>
                            <span className={'playItem prev'}></span>
                            <span onClick={this.handlehandlePlay}
                                className={'music_play'} style={{ display: playshow }}></span>
                            <span onClick={this.handleSuspended} className={'music_play suspended'} style={{ display: suspended }}></span>
                            <span className={'playItem next'}></span>
                        </div>
                        <div className={'music_pic'}>
                            <Link to={''} href="">
                                <img src='http://p1.music.126.net/7skxWYp7lF70y347YAjaBQ==/109951163256304204.jpg?param=34y34' alt=''/>
                            </Link>
                            
                        </div>
                        <div className={'music_pic'}><Link to={''} ></Link></div>
                        <div className={'progress_bar'}>
                            <div className={'progress_bar_title'}>
                                <Link to={''}>海阔天空</Link>
                                <Link to={''}>beyond</Link>
                            </div>
                            <div className="bar totalBar"></div>
                            <div className="bar CacheBar"></div>
                            <div className="bar playBar"></div>
                            <div className="bar playBar_icon"></div>
                            <div  onClick={this.handleControls} className="bar totalBar controls"></div>
                            <div className={'alltime'}>
                                0{curmintime}:{cursecondtime < 10 ? '0' + cursecondtime : cursecondtime}/0{minutes || 0}:{second < 10 ? '0'+second : second ||'00'}
                            </div>
                        </div>
                    </div>
                    <audio id={'audio'} src={this.state.Url}></audio>
                </div>
            </div>
        )
    }
}
