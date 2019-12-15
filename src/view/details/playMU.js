import React, { Component } from 'react'
import './index.css'
import axios from 'axios';
import { connect } from 'react-redux'
class PlayMU extends Component {
    constructor(arg) {
        super(arg)
        let id = this.props.id
        this.getSong(id)
    }
    //播放音乐
    playSong = () => {
        let Audio = this.refs.audio
        Audio.play()
        // console.log(Audio)
    }
    //歌曲
    getSong = (id) => {
        this.props.dispatch(dispatch => {
            axios.get(`http://guohaucong.top:8800/song/url?id=${id}`)
                .then(res => {
                    dispatch({
                        type: 'DETAIL_SONG_SUCC',
                        Song: res.data.data[0]
                    })
                })
        })
        

    }
    render() {
        // console.log(this.props)
        return (
            <div className={'PlayMU'}>
                <button onClick={this.playSong} className={'lyrics_play'}>播放</button>
                <audio ref={'audio'} src={this.props.Song.url} />
            </div>
        )
    }
}
export default connect(state => state.PlayMU)(PlayMU)