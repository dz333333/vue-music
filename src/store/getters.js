export const musicList = state => state.musicList
export const playList = state => state.playList
export const currentIndex = state => state.currentIndex
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playHistory = state => state.playHistory
export const mode = state => state.mode
export const sequenceList = state => state.sequenceList
export const favoriteList = state => state.favoriteList

export const currentSong = (state) => {
    console.log(state.playList[state.currentIndex],'8')
  return state.playList[state.currentIndex] || {}
}
