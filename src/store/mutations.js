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
    },
    [types.SET_PLAY_HISTORY](state,history){
        state.playHistory=history
    },
    [types.SET_CURRENT_INDEX] (state, index) {
        state.currentIndex = index
    },[types.SET_PLAY_MODE] (state, mode) {
        state.mode = mode
    },[types.SET_SEQUENCE_LIST] (state, list) {
        state.sequenceList = list
    },
    [types.SET_FAVORITE_LIST] (state, list) {
        state.favoriteList = list
    }
}

export default mutations
