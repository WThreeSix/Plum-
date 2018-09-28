export default (state={selectedTab:"homeTab"},action)=>{
    if(action.type==="CHANGETAB"){
        return {selectedTab:action.payload}
    }
    return state
}