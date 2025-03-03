import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import( '@/views/OrdersView.vue' ),
    props: true,
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import( '@/views/SettingsView.vue' ),
    props: true
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import( '@/views/NotificationsView.vue' ),
    props: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior( _to, _from, savedPosition ) {
    if ( savedPosition ) {
      // return savedPosition
    } 
    return { left: 0, top: 0 }
  }
})



export default router
