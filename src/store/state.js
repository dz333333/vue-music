import {loadSearch, loadPlay, loadFavorite} from '@/common/js/cache'
import {playMode} from '@/common/js/config'
const state={
    musicList:{},
    playList:[],
    currentIndex:-1,
    // 播放
    playing: false,
    fullScreen:false,
    playHistory:loadPlay(),
    mode:playMode.sequence,
    // 顺序列表
    sequenceList: [],
}
export default state
