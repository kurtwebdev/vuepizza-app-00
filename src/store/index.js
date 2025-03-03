import { createStore } from 'vuex'

import cartModule from './modules/cart/index.js'
import menuModule from './modules/menu/index.js'
import notificationsModule from './modules/notifications/index.js'
import ordersModule from './modules/orders/index.js'
import settingsModule from './modules/settings/index.js'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

const store = createStore({
  modules: {
    cart: cartModule,
    menu: menuModule,
    notifications: notificationsModule,
    orders: ordersModule,
    settings: settingsModule
  },
  state() {
    return {

    }
  },
  mutations,
  actions,
  getters
})

export default store
