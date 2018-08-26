
import * as types from './mutation-types'
export const insertSong = function ({commit, state}, song) {
    let playlist = state.playlist.slice()
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex
    // 记录当前歌曲
    let currentSong = playlist[currentIndex]
    // 查找当前列表中是否有带插入的歌曲，并返回银锁
    let fpIndex = findIndex(playlist, song)
    // 因为是插入歌曲，所以索引+1
    currentIndex++
    // 插入歌曲
    playlist.splice(currentIndex, 0, song)
    // 如果已经包含这首歌
    if (fpIndex > -1) {
        // 如果当前插入的序号大于列列表中的序号
        if (currentIndex > fpIndex) {
            // 删掉
            playlist.splice(fpIndex, 1)
            // 因为删除后数组前移，所以 Index--
            currentIndex--
        } else {
            playlist.splice(fpIndex + 1, 1)
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
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}

