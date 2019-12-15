import React, {Component} from 'react';
import { Layout } from 'antd'
import Nav from './nav'
import SearchNav from './search'
import Login from './login'
class Header extends Component {
    render() {
        return (
            <div>
                <Layout.Header>
                    <div className={'wrap'}>
                        <div className={'logo'}></div>
                        <Nav/>
                        <div className={'nav_right'}>
                            <SearchNav/>
                            <Login/>
                        </div>
                    </div>
                </Layout.Header>
            </div>
        );
    }
}

export default Header;