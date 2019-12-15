import React, { Component } from 'react'
import './index.css'
import ConTop from './con_top'
import ConLeft from './con_left'
import { Layout } from 'antd'
import ConRight from './con_right'
export default class HomeMain extends Component {

    render() {
        // const id = this.props.match.params.id
        // console.log(this.props.match.params)
        return (
            <div>
                <Layout className={'ConWrap'}>
                    <ConTop />
                    <div className={'Con_Box'}>
                        <ConLeft />
                        <ConRight />
                    </div>
                </Layout>
            </div>
        )
    }
}

