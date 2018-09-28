export default (state={buycarlist:[]},action)=>{
    if(action.type==="BUYCAR"){
        return {
            buycarlist:[
                ...state.buycarlist,
                action.payload
            ]
        }
    }
    return state
}