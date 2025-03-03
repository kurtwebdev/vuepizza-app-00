export default {
    addToTotal( context, payload ) {
        context.commit( 'addToTotal', payload )
    },
    removeFromTotal( context, payload ) {
        context.commit( 'removeFromTotal', payload )
    },
    resetCartTotal( context ) {
        context.commit( 'resetCartTotal' )
    }
}