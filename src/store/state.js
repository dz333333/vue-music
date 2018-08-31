import {loadSearch, loadPlay, loadFavorite} from '@/common/js/cache'
const state={
    musicList:{},
    playList:[],
    currentIndex:-1,
    // 播放
    playing: false,
    fullScreen:false,
    playHistory:loadPlay()
}
export default state
