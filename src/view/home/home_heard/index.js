import React, { Component } from 'react'
import { Switch, Redirect, Route, Link } from 'react-router-dom'
import { Menu } from 'antd'
import './index.css'
import HomeMain from '../home_main'
import Details from '../../details'
import User from '../../users'
import TopList from '../../toplist'
import PlaylistHot from '../../playlisthot'
import PlaylistDetail from '../../../commons/PlaylistDetail'
import Found from '../../../commons/found'
export default class HomeHeard extends Component {
    render() {
        return (
            <div className={'HomeHeard'}>
                <Menu mode="horizontal"
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to={'/home/discover'}>推荐</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'/home/toplist'}>排行榜</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={'/home/playlist'}>歌单</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={'/home/djradio'}>主播电台</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={'/home/artist'}>歌手</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to={'/home/album'}>新碟上架</Link>
                    </Menu.Item>
                </Menu>
                <div className={'con'}>
                    <Switch>
                        {/* <Route exact path='/News/' component={Index}></Route> */}
                        <Route exact path='/home/discover' component={HomeMain}></Route>
                        <Route path='/home/toplist' component={TopList}></Route>
                        <Route path='/home/playlist/' component={PlaylistHot}></Route>
                        <Route path='/home/playlistdetail/:id' component={PlaylistDetail}></Route>
                        <Route path={'/home/details/:id'} component={Details} />
                        <Route path={'/home/users/:id'} component={User} />
                        <Route path='/home/*' component={Found}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
