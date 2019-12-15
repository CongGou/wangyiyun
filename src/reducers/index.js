import { combineReducers } from 'redux' //把所有的需要值结合起来
//详情页
import details from './detail/details'
import DetailLyrics from './detail/DetailLyrics'
import PlayMU from './detail/PlayMU'
import DetailsCom from './detail/detailsCom'
//全部歌单
import PlayList from './PlayList/PlayList'
let Reducers = combineReducers({
    details,
    DetailLyrics,
    PlayMU,
    DetailsCom,
    PlayList
})
export default Reducers
