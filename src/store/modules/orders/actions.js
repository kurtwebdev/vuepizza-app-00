export default {
    addOrder( context, payload ) {
        context.commit( 'addOrder', payload )
    },
    removeOrder( context, payload ) {
        context.commit( 'removeOrder', payload )
    },
    addToOrderHistory( context, payload ) {
        context.commit( 'addToOrderHistory', payload )
    },
    clearOrders( context ) {
        context.commit( 'clearOrders' )
    }
}