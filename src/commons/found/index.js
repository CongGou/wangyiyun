import React, { Component } from 'react'
import './index.css'
export default class Found extends Component {
    render() {
        return (
            <div className={'Found'}>
                <div className={'img'}></div>
                <h3>很抱歉，你要查找的网页找不到</h3>
            </div>
        )
    }
}
