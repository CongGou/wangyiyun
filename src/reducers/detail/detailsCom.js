function DetailsCom(state = {
    DetailsCom: {
        Comments: [],
        total: '',
    }
},action) {
    switch (action.type) {
        case 'DETAIL_DETAILSCOM_SUCC':
            return {
                DetailsCom: action.DetailsCom 
            }
        default:
            return state
    }
}
export default DetailsCom