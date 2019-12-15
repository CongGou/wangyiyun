import React, {Component} from 'react';
import { Input } from 'antd';
import './index.css'
class SearchNav extends Component {
    render() {
        return (
            <div className={'search_box'}>
                <Input.Search size="large"
                       placeholder="音乐/视频/电台/用户"
                       className={'Search'}/>
            </div>
        );
    }
}

export default SearchNav;