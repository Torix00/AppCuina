import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Rec from '@/components/Rec'
import Sap from '@/components/Sap'
import Ams from '@/components/Ams'
import Gds from '@/components/Gds'
import Ufbd from '@/components/Ufbd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/rec',
      name: 'Receptes',
      component: Rec
    },
    {
      path: '/sap',
      name: 'Sorpresa',
      component: Sap
    },
    {
      path: '/ams',
      name: 'Avui',
      component: Ams
    },
    {
      path: '/gds',
      name: 'Gaudim',
      component: Gds
    },
    {
      path: '/ufbd',
      name: 'Final',
      component: Ufbd
    },

  ]
})
