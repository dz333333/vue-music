
import * as types from './mutation-types'
import {saveSearch, deleteSearch, clearSearch, savePlay, saveFavorite, deleteFavorite} from '@/common/js/cache'
import {playMode} from '@/common/js/config'
import {shuffle} from '@/common/js/utl'
function findIndex (list, song) {
    return list.findIndex((item) => {
        return item.id === song.id
    })
}
export const selectPlay = function ({commit, state}, {list, index}) {
    commit(types.SET_SEQUENCE_LIST, list)
    // 如果播放模式为随机
    if (state.mode === playMode.random) {
        let randomList = shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        index = findIndex(randomList, list[index])
    } else {
        commit(types.SET_PLAYLIST, list)
    }
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}
export const insertSong = function ({commit, state}, song) {
    console.log(state,'s',song)

    let playList = state.playList
    // console.log(playList,'hhhh')
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex
    // 记录当前歌曲
    let currentSong = playList[currentIndex]
    // 查找当前列表中是否有带插入的歌曲，并返回索引
    let fpIndex = findIndex(playList, song)
    // 因为是插入歌曲，所以索引+1
    currentIndex++
    // 插入歌曲
    playList.splice(currentIndex, 0, song)
    // // 如果已经包含这首歌
    if (fpIndex > -1) {
        // 如果当前插入的序号大于列列表中的序号
        if (currentIndex > fpIndex) {
            // 删掉
          playList.splice(fpIndex, 1)
            // 因为删除后数组前移，所以 Index--
            currentIndex--
        } else {
          playList.splice(fpIndex + 1, 1)
        }
    }

    let currentSIndex = findIndex(sequenceList, currentSong) + 1
    let fsIndex = findIndex(sequenceList, song)

    sequenceList.splice(currentSIndex, 0, song)
    if (fsIndex > -1) {
        if (currentSIndex > fsIndex) {
            sequenceList.splice(fpIndex, 1)
        } else {
            sequenceList.splice(fpIndex + 1, 1)
        }
    }
    commit(types.SET_PLAYLIST, playList)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, state.playing)
}

export const savePlayHistory = function ({commit}, song) {
    commit(types.SET_PLAY_HISTORY, savePlay(song))
}
export const deleteSongList = function ({commit}) {
    commit(types.SET_PLAYLIST, [])
    commit(types.SET_SEQUENCE_LIST, [])
    commit(types.SET_CURRENT_INDEX, -1)
    commit(types.SET_PLAYING_STATE, false)
}
export const deleteSong = function ({commit, state}, song) {
    let playList = state.playList.slice()
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex
    let pIndex = findIndex(playList, song)
    playList.splice(pIndex, 1)
    let sIndex = findIndex(sequenceList, song)
    sequenceList.splice(sIndex, 1)

    if (currentIndex > pIndex || currentIndex === playList.length) {
        currentIndex--
    }

    commit(types.SET_PLAYLIST, playList)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)

    const playingState = playList.length > 0
    // 如果歌曲删除完毕，那么 播放停止
    commit(types.SET_PLAYING_STATE, playingState)
}
