import React, {Component} from 'react';
import HorizontailLine from '../../commons/HorizontalLine'
import './index.css'
import HomeHeard from './home_heard'
import Foot from '../Foot'
class Home extends Component {
    render() {
        return (
            <div className={'home_box'}>
                <HorizontailLine />
                <div className={'home_nav'}>
                    <HomeHeard />
                </div>
                <Foot/>
            </div>

        );
    }
}

export default Home;