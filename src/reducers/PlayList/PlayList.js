function PlayList(state = {
    loading: true,
    
    UserData: {
        playlists: [],
        cat: '',
        total:'0'
    },
    offset: 0
},action) {
    switch (action.type) {
        case 'PLAYLISTS_SUCC':
            return {
                UserData: action.UserData,
                offset: action.offset
            }
        default: 
            return state
    }
}
export default PlayList