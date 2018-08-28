export const musicList = state => state.musicList
export const playList = state => state.playList
export const currentIndex = state => state.currentIndex
export const playing = state => state.playing
export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
