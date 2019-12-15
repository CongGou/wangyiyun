import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HorizontalLine from '../../commons/HorizontalLine'
import { Input, Button, List, Avatar } from 'antd'
import moment from 'moment'
export default class Comments extends Component {
    render() {
        const { TextArea } = Input;
        let Total = this.props.Total
        let comments = this.props.comments
        // console.log(comments)
        return (
            <div>
                <div className={'Comments_title'}>
                    <h1>评论</h1>
                    <span>
                        共{Total < 10000 ? Total : parseInt(Total / 10000) + '万'}条评论
                        </span>
                    <HorizontalLine />
                </div>
                 <div className={'Commentstest'}>
                    <img src='http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50' alt='' />
                    <TextArea
                        placeholder="评论"
                        autosize={{ minRows: 2, maxRows: 6 }}
                    />
                    <Button ghost>评论</Button>
                </div>
                <div className={'Comments_title Comments_list'}>
                    <h5>全部评论</h5>
                    <HorizontalLine />
                    <List
                        itemLayout="horizontal"
                        loading={false}
                        dataSource={comments}
                        renderItem={item => (
                            <List.Item
                                actions={[
                                    `(${item.likedCount < 10000 ? item.likedCount : parseInt(item.likedCount / 10000) + '万'})`,
                                    "回复"
                                ]}>
                                <List.Item.Meta
                                    avatar={
                                        <Link to={'/home/users/' + item.user.userId}>
                                            <Avatar
                                                shape="square" size={64}
                                                src={item.user.avatarUrl} />
                                        </Link>
                                    }
                                    description={
                                        <div>
                                            <Link to={'/home/users/' + item.user.userId}>{item.user.nickname}：</Link>
                                            {item.content}
                                            <h5 className={"ant-list-item-meta-title"}>{moment(item.time).format("YYYY年MM月DD日")}</h5>
                                        </div>
                                    }
                                >

                                </List.Item.Meta>
                            </List.Item>
                        )}
                    >

                    </List>

                </div>
            </div>
        )
    }
}
