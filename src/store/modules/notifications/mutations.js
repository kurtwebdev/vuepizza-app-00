let notificationId = 1
export default {
    addToNotifications(state, payload) {
        payload.id = notificationId
        state.notifications.push(payload)
        notificationId++
    },
    removeFromNotifications(state, payload) {
        const notificationsArray = state.notifications
        const notificationIndex = notificationsArray.indexOf(payload)
        if (notificationIndex > -1) {
            notificationsArray.splice(notificationIndex, 1)
        }
    }
}