import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, List, Avatar } from 'antd'
import './index.css'
import PlayMU from './playMU'
import DetailsCom from './detailsCom'
import axios from 'axios';
import { connect } from 'react-redux'
import DetailLyrics from './DetailLyrics'
class Details extends Component {
    constructor(arg) {
        super(arg)
        const id = this.props.match.params.id
        this.getInformation(id)
    }
    //详细信息
    getInformation = (id) => {
        this.props.dispatch(dispatch => {
            axios.get(`http://guohaucong.top:8800/song/detail?ids=${id}`)
                .then(res => {
                    dispatch({
                        type: 'DETAIL_SUCC',
                        information: res.data.songs[0],
                        album: res.data.songs[0].al,
                        author: res.data.songs[0].ar[0]
                    })
                })
        })
        
    }

    
    render() {
        // console.log(this.props)
        //歌曲信息
        let information = this.props.information
        let album = this.props.album
        let author = this.props.author
        
        return (
            <div className={'Details'}>
                <Layout className={'ConWrap'}>
                    <div className={'lyrics_box'}>
                        <div className={'lyrics_bg'}>
                            <img src={album.picUrl} alt=''/>
                        </div>
                        <div className={'lyrics_con_box'}>
                            <div className={'Con_top'}>
                                <h1>{information.name}</h1>
                                <span>歌手：<Link to={''}>{author.name}</Link></span><br/>
                                <span>所属专辑：<Link to={''}>{album.name}</Link></span><br />
                                {/* 播放 */}
                                <PlayMU id={this.props.match.params.id}/>
                            </div>
                            <DetailLyrics id={this.props.match.params.id}/>
                        </div>
                    </div>
                    {/* 评论 */}
                    <DetailsCom id={this.props.match.params.id}/>
                </Layout>
            </div>

        );
    }
}
export default connect(state => state.details)(Details);