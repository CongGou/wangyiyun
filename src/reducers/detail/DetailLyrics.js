function DetailLyrics(state = {
    loading: true,
    lyrics: {
        lrc: {
            lyric: ''
        }
    },

}, action) {
    // console.log(action)
    switch (action.type) {
        case 'DETAIL_LYRIC_SUCC':
            return {
                lyrics: action.lyric
            }
        default:
            return state
    }
}
export default DetailLyrics