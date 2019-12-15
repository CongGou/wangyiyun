import React, { Component } from 'react'
import './index.css'
import Comments from '../../commons/comments'
import axios from 'axios';
import { connect } from 'react-redux'
class DetailsCom extends Component {
    constructor(arg) {
        super(arg)
        const id = this.props.id
        this.getCommentslist(id)
    }
    //评论
    getCommentslist = (id) => {
        this.props.dispatch(dispatch => {
            axios.get(`http://guohaucong.top:8800/comment/music?id=${id}&limit=2`)
                .then(res => {
                    dispatch({
                        type: 'DETAIL_DETAILSCOM_SUCC',
                        DetailsCom: res.data
                    })
                })
        })
        
    }
    render() {
        // console.log(this.props.DetailsCom.hotComments)
        let comments = this.props.DetailsCom.hotComments
        let Total = this.props.DetailsCom.total
        return (
            <div>
                <Comments Total={Total} comments={comments} />
            </div>
        )
    }
}
export default connect(state => state.DetailsCom)(DetailsCom);
