import React, { Component } from 'react'
import './index.css'
import axios from 'axios';
import { connect } from 'react-redux'
class DetailLyrics extends Component {
    constructor(arg) {
        super(arg)
        
        const id = this.props.id
        this.getLyrics(id)
        // this.getCommentslist(id)
    }
    getLyrics = (id) => {
        this.props.dispatch((dispatch) => {
            axios.get(`http://guohaucong.top:8800/lyric?id=${id}`)
                .then(res => {
                    dispatch({
                        type: 'DETAIL_LYRIC_SUCC',
                        lyric: res.data
                    })
                })
        })

    }
    render() {
        // 歌词
        let lyric = this.props.lyrics.lrc.lyric
        let text = lyric.split('[')
        let Lrc = text.map((item, index) => {
            let lrcText = item.split(']')
            if (lrcText[1]) {
                return (
                    <p key={index}>{lrcText[1]}</p>
                )
            }
            return item
        })
        return (
            <div>
                <div className={'Con_lyrics'}>
                    {Lrc}
                </div>
            </div>
        )
    }
}
export default connect(state => state.DetailLyrics)(DetailLyrics);
