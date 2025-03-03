<template>
    <v-col>
        <v-list density="compact" width="100%">
            <div v-if="getNotifications.length <= 0">
                <p>There are no notifications!</p>
            </div>
            <v-list-item elevation="3" class="pa-4 ma-2" v-for="orderItem in getNotifications" :key="orderItem.date">
                <template v-slot:append>
                    <v-btn @click="removeNotifications(orderItem)" flat icon="mdi-close"></v-btn>
                </template>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                        <h3 class="capitalize">Your order placed on {{ orderItem.date }}, {{ orderItem.time }} is ready!
                        </h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <h4>Order: </h4>
                        <v-list>
                            <v-list-item v-for="orders in orderItem.order" :key="orders.id">
                                <h4 class="capitalize">{{ orders.item }}</h4>
                                <div v-if="orders.toppings">
                                    <p>Toppings: </p>
                                    <v-list density="compact" class="py-0">
                                        <v-list-item class="py-0" v-for="(topping) in orders.toppings"
                                            :key="topping + orders.id * Math.random()" density="compact">
                                            <p>{{ topping }}</p>
                                        </v-list-item>
                                    </v-list>
                                </div>

                                <h5>Price: ${{ orders.price.toFixed(2) }}</h5>
                                <v-divider inset class="mx-auto my-4"></v-divider>
                            </v-list-item>
                        </v-list>
                        <h4>Total: ${{ orderItem.total.toFixed(2) }}</h4>
                    </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-list-item>
        </v-list>
    </v-col>
</template>

<script>
export default {
    computed: {
        getNotifications() {
            return this.$store.getters['notifications/getNotifications']
        },
        
    },
    methods: {
        removeNotifications(notification) {
            this.$store.dispatch('notifications/removeFromNotifications', notification)
        },
        delayNotification( duration ) {
            setTimeout( () => {
                return true
            }, duration )
        } 
    }
}
</script>

<style></style>