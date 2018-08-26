import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const Recommend = (resolve) => {
    import('@/components/recommend/recommend').then((module) => {
        resolve(module)
    })
}
const MusicList = (resolve) => {
    import('@/components/music-list/music-list').then((module) => {
        resolve(module)
    })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
      {
          path: '/recommend',
          component: Recommend,
          children: [
              {
                  path: ':id',
                  component: MusicList
              }
          ]
      },

  ]
})
