import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

import menuData from '@/data.js'

export default {
    namespaced: true,
    state() {
        return {
            menuData
        }
    },
    mutations,
    actions,
    getters
}