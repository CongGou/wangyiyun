import React, { Component } from 'react'
import Playlists from '../../commons/playlist'
import axios from 'axios'
import { Pagination } from 'antd'
import './index.css'
import { connect } from 'react-redux'
class PlaylistHot extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            offset: this.props.offset
        })
        this.getPlayList(this.props.offset)
        
    }
    onChange = (current) => {
        // console.log(current)
        this.setState({
            offset: (current - 1) * 35
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps)
        if (this.props.offset !== nextState.offset) {
            this.getPlayList(nextState.offset);
        }
        return true
    }
    getPlayList = (offset) => {
        this.props.dispatch(dispatch => {
            axios.get(`http://guohaucong.top:8800/top/playlist?limit=35&offset=${offset}`)
                .then(res => {
                    dispatch({
                        type: 'PLAYLISTS_SUCC',
                        UserData: res.data,
                        offset: 0
                    })
                }).catch(e => {
                    console.log(e)
                })
        })
        
    }
    
    render() {
        let Playlist = this.props.UserData.playlists
        let nickname = this.props.UserData.cat
        let total = this.props.UserData.total
        //
        // console.log(this.props.UserData.playlists)
        // console.log(this.props.UserData.cat)/
        return (
            <div className={'PlaylistHot'}>
                <Playlists Playlist={Playlist} nickname={nickname} />
                <div className={'PlaylistHot_btn'}>
                    <Pagination  total={total / 3.5} onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}
export default connect(state => state.PlayList)(PlaylistHot)