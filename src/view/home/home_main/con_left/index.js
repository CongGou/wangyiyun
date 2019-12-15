import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Carousel, List } from 'antd'
import './index.css'
import Discover from '../../../../commons/discover'
import axios from 'axios'
export default class ConLeft extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            NewAlbum: [],
            list_item: [],
            PlaylistHot:[],
            SoaringList:'榜单',
            CloudList: '云音乐飙升榜',
            loading: true,
            MusicSoared: [],
            NewSongList: '云音乐新歌榜',
            NewSong: [],
            OriginalSongList: '网易原创歌曲榜',
            OriginalSong:[]
            
        })
        this.getPlaylistHot()
        this.getData()
        this.getNewAlbum()
        this.getCloudList()
        this.getNewSongList()
        this.getOriginalSongList()
    }
    // 轮播图切换
    next = () => {
        this.slider.slick.slickNext();
    }
    prev = () => {
        this.slider.slick.slickPrev();
    }
    //热门歌单
    getPlaylistHot = () => {
        axios.get('http://guohaucong.top:8800/playlist/hot')
            .then(res => {
                let PlaylistHot = res.data.tags
                this.setState({
                    PlaylistHot
                })
            })
    }
    // 推荐歌单
    getData = () => {
        axios.get('http://guohaucong.top:8800/personalized?limit=8')
            .then(res => {
                // console.log(res.data.result)
                const data = res.data.result;
                this.setState({
                    list_item: data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    // 新碟上架
    getNewAlbum = () => {
        axios.get('http://guohaucong.top:8800/album/newest')
            .then(res => {
                // console.log(res.data)
                const albums = res.data.albums;
                this.setState({
                    NewAlbum: albums
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    // 云飙升榜单
    getCloudList = () => {
        axios.get('http://guohaucong.top:8800/top/list?idx=3')
            .then(res => {
                // console.log(res.data.playlist.tracks)
                const MusicSoared = res.data.playlist.tracks
                // console.log(MusicSoared)
                this.setState({
                    loading: false,
                    MusicSoared: MusicSoared
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    // 新歌榜
    getNewSongList = () => {
        axios.get('http://guohaucong.top:8800/top/list?idx=0')
            .then(res => {
                // console.log(res)
                const NewSong = res.data.playlist.tracks
                // if (MusicSoared)
                // console.log(MusicSoared)
                this.setState({
                    loading: false,
                    NewSong: NewSong
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    // 原创榜
    getOriginalSongList = () => {
        axios.get('http://guohaucong.top:8800/top/list?idx=2')
            .then(res => {
                // console.log(res)
                const OriginalSong = res.data.playlist.tracks
                // if (MusicSoared)
                // console.log(MusicSoared)
                this.setState({
                    loading: false,
                    OriginalSong: OriginalSong
                })
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        //热门歌单
        let PlaylistHot = this.state.PlaylistHot
        const Recommended = this.state.list_item
        // 新碟上架
        const AlbumsList1 = this.state.NewAlbum.map((item, index) => {
            if (index < 5) {
                return (
                    <li className={'album_item'} key={index}>
                        <a href='/home' className={'item_img_box'}>
                            <img src={item.picUrl} alt=''/>
                        </a>
                        <a href='/home' className={'item_img_box albumImgBackground'}>
                        </a>
                        <p>
                            <a href='/home'>{item.name}</a>
                        </p>
                        <p>
                            <a href='/home' className={'fontColor'}>{item.artist.name}</a>
                        </p>
                    </li>
                )
            }
            
        })
        const AlbumsList2 = this.state.NewAlbum.map((item, index) => {
            if (index > 4&&index<10) {
                return (
                    <li className={'album_item'} key={index}>
                        <a href='/home' className={'item_img_box'}>
                            <img src={item.picUrl} alt=''/>
                        </a>
                        <a href='/home' className={'item_img_box albumImgBackground'}>
                        </a>
                        <p>
                            <a href='/home'>{item.name}</a>
                        </p>
                        <p>
                            <a href='/home' className={'fontColor'}>{item.artist.name}</a>
                        </p>
                    </li>
                )
            }
        })
        // 云飙升榜单
        return (
            <div className={'ConLeft'}>
                {/* 推荐歌单 */}
                <Discover Recommended={Recommended} PlaylistHot={PlaylistHot}/>
                {/* 新碟上架 */}
                <div className={'Con_discover_box album_box'}>
                    <div className={'Hot_Recommended'}>
                        <a href='/home' className={"Hot"}><h1>新碟上架</h1></a>
                    </div>
                    <div className={'Hot_Con New_album'}>
                        <Carousel autoplay dots={false} ref={el => (this.slider = el)}>
                            <div className={'album_con'}>
                                <ul className={'album_list'}>
                                    {AlbumsList1}
                                </ul>
                            </div>
                            <div className={'album_con'}>
                                <ul className={'album_list'}>
                                    {AlbumsList2}
                                </ul>
                            </div>
                        </Carousel>
                        <Icon className={'Icon Icon_left'} type="left" onClick={this.prev}/>
                        <Icon className={'Icon Icon_right'} type="right" onClick={this.next}/>
                    </div>
                </div>
                {/* 榜单 */}
                <div className={'Con_discover_box toplist_box'}>
                    <div className={'Hot_Recommended'}>
                        <a href='/home/playlist' className={"Hot"}><h1>{this.state.SoaringList}</h1></a>
                    </div>
                    <div className={'Hot_Con'}>
                        {/* 飙升榜 */}
                        <div className={'TopList'}>
                            <div className={'TopListHeard'}>
                                <div className={'TopListImg_box'}>
                                    <Link to='/home/toplist/19723756' >
                                        <img className={'TopListImgTOp'} alt='' />
                                        <img src='http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100' alt=''/>
                                    </Link>
                                </div>
                                <div className={'TopListImg_right'}>
                                    <Link to=''><h4>{this.state.CloudList}</h4></Link>
                                    <Icon className={'TopListIcon'} type="play-circle" />
                                    <Icon className={'TopListIcon'} type="folder-open" />
                                </div>
                            </div>
                            <div>
                                <List
                                    size="small"
                                    bordered
                                    loading={this.state.loading}
                                    dataSource={this.state.MusicSoared.slice(0,10)}
                                    renderItem={(item,index)=> <List.Item>
                                        <Link to={'/home/details/'+item.id}><span>{index + 1}、</span> {item.name}</Link>
                                    </List.Item>}
                                />
                            </div>
                            <div className={'view_deadline'}>
                                <Link to={'/home/toplist/19723756'}>查看更多>></Link>
                            </div>
                        </div>
                        {/* 新歌榜 */}
                        <div className={'TopList'}>
                            <div className={'TopListHeard'}>
                                <div className={'TopListImg_box'}>
                                    <Link to='/home/toplist/19723756' >
                                        <img className={'TopListImgTOp'} alt='' />
                                        <img src='http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100' alt=''/>
                                    </Link>
                                </div>
                                <div className={'TopListImg_right'}>
                                    <Link to=''><h4>{this.state.NewSongList}</h4></Link>
                                    <Icon className={'TopListIcon'} type="play-circle" />
                                    <Icon className={'TopListIcon'} type="folder-open" />
                                </div>
                            </div>
                            <div>
                                <List
                                    size="small"
                                    bordered
                                    loading={this.state.loading}
                                    dataSource={this.state.NewSong.slice(0, 10)}
                                    renderItem={(item, index) => <List.Item>
                                        <Link to={'/home/details/' + item.id}><span>{index + 1}、</span> {item.name}</Link>
                                    </List.Item>}
                                />
                            </div>
                            <div className={'view_deadline'}>
                                <Link to={'/home/toplist/19723756'}>查看更多>></Link>
                            </div>
                        </div>
                        {/* 原创榜 */}
                        <div className={'TopList'}>
                            <div className={'TopListHeard'}>
                                <div className={'TopListImg_box'}>
                                    <Link to='/home/toplist/19723756' >
                                        <img className={'TopListImgTOp'} alt='' />
                                        <img src='http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100' alt='' />
                                    </Link>
                                </div>
                                <div className={'TopListImg_right'}>
                                    <Link to=''><h4>{this.state.OriginalSongList}</h4></Link>
                                    <Icon className={'TopListIcon'} type="play-circle" />
                                    <Icon className={'TopListIcon'} type="folder-open" />
                                </div>
                            </div>
                            <div>
                                <List
                                    size="small"
                                    bordered
                                    loading={this.state.loading}
                                    dataSource={this.state.OriginalSong.slice(0, 10)}
                                    renderItem={(item, index) => <List.Item>
                                        <Link to={'/home/details/' + item.id}><span>{index + 1}、</span> {item.name}</Link>
                                    </List.Item>}
                                />
                            </div>
                            <div className={'view_deadline'}>
                                <Link to={'/home/toplist/19723756'}>查看更多>></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
