import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import { Menu } from 'antd'
class Nav extends Component {
    render() {
        return (
            <div className={'nav'}>
                <Menu mode="horizontal"
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to={'/home/discover'}>发现音乐</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'/my_music'}>我的音乐</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={'/friend'}>朋友</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={'/'}>商城</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={'/'}>音乐人</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to={'/'}>下载客户端</Link>
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}

export default Nav;