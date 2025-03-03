export default {
    addToTotal( state, payload ) {
        state.cartTotal += payload.price
        state.orderDuration += payload.duration
    },
    removeFromTotal( state, payload ) {
        state.cartTotal -= payload.price
        state.orderDuration -= payload.duration
    },
    resetCartTotal( state ) {
        state.cartTotal = 0
        state.orderDuration = 0
    }
}