import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

export default {
    namespaced: true,
    state() {
        return {
            cartItems: [
               
            ],
            showDrawer: false,
            cartTotal: 0,
            orderDuration: 0
        }
    },
    mutations,
    actions,
    getters
}