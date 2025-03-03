let orderId = 1
let orderHistoryId = 1
export default {
  addOrder( state, payload ) {
    payload.id = orderId
    state.orders.push( payload )
    orderId++
  },
  removeOrder( state, payload ) {
    const ordersArray = state.orders
    const orderIndex = ordersArray.indexOf( payload )
    if ( orderIndex > -1 ) {
      ordersArray.splice( orderIndex, 1 )
    }
  },
  addToOrderHistory( state, payload ) {
    payload.id = orderHistoryId
    state.orderHistory.push( payload )
    orderHistoryId++
  },
  clearOrders( state ) {
    state.orders = []
  }
}