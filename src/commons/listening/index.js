import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd'
import HorizontailLine from '../HorizontalLine'
import './index.css'
export default class Listening extends Component {
    render() {
        let data = this.props.Listening
        return (
            <div className={'Listening'}>
                <div className={'tab-separator'}>
                    <div className={'tab-separator-box'}>
                        <h1>听歌排行</h1>
                    </div>
                </div>
                <HorizontailLine />
                <div>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    description={
                                        <div>
                                            <Link className={'listening'} to={'/home/details/' + item.song.id}>
                                                <span className={'Rankings'}>{index + 1}、</span>
                                                <span className={'legenda'}>{item.song.al.name}</span>
                                                <span className={'authorThe'}> - {item.song.ar[0].name}</span>
                                            </Link>
                                        </div>
                                    }
                                />
                            </List.Item>
                        )}>
                    </List>
                </div>
            </div>
        )
    }
}
