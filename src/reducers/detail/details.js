function details(state = {
    loading: true,
    information: {},
    album: {
        name:'',
        picUrl:'',
    },
    author: {
        name: '',
    }
}, action) {
    // console.log(action)
    switch (action.type) {
        case 'DETAIL_SUCC':
            return {
                information: action.information,
                album: action.album,
                author: action.author
            }
        default:
            return state
    }
}
export default details