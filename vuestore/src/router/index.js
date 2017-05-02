import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstVue from '@/components/FirstVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/store',
      name: 'Vue Store',
      component: FirstVue
    }
  ]
})
