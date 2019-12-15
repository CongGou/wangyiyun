import React, {Component} from 'react';

import Player from './player'
class Foot extends Component {
    render() {
        return (
            <div className={'foot'}>
                备案号：津ICP备19003971号-1 
                <Player />
            </div>

        );
    }
}

export default Foot;