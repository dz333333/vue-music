import * as types from './mutation-types'
const mutations={
    [types.SET_MUSIC_LIST](state,musicList){
        console.log(666,musicList)
        state.musicList=musicList
        console.log(state)
    }
}

export default mutations
