import * as types from './mutation-types'
const mutations={
    [types.SET_MUSIC_LIST](state,musicList){
        console.log(666,musicList)
        state.musicList=musicList
        console.log(state)
    },
    [types.SET_PLAYLIST](state,list){
        state.playList=list
    },
    [types.SET_CURRENT_INDEX](state,index){
        state.currentIndex=index
    },
    [types.SET_PLAYING_STATE](state,flag){
        state.playing=flag
    },
    [types.SET_FULL_SCREEN](state,flag){
        state.fullScreen=flag
    }
}

export default mutations
