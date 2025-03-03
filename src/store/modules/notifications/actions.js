export default {
    addToNotifications( context, payload ) {
        context.commit( 'addToNotifications', payload )
    },
    removeFromNotifications( context, payload ) {
        
        context.commit( 'removeFromNotifications', payload )
    }
}