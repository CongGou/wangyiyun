import React, { Component } from 'react'
import HorizontalLine from '../../commons/HorizontalLine'
import Listening from '../../commons/listening'
import { Layout } from 'antd'
import './index.css'
import axios from 'axios'
export default class ListenerList extends Component {
    constructor(arg) {
        super(arg)
        this.state = ({
            Listening:[]
        })
        const id = this.props.match.params.id
        this.getListenerList(id)
    }
    getListenerList = (id) => {
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
    render() {
        //播放记录
        let Listen = this.state.Listening
        // console.log(Listen)
        return (
            <div>
                <HorizontalLine/>
                <div className={'ListenerList'}>
                    <Layout className={'ConWrap'}>
                        <Listening Listening={Listen}/>
                    </Layout>
                </div>
            </div>
        )
    }
}
