function PlayMU(state = {
    loading: true,
    Song:{}
},action) {
    switch (action.type) {
        case 'DETAIL_SONG_SUCC':
            return {
                Song: action.Song
            }
        default:
            return state
    }
}
export default PlayMU