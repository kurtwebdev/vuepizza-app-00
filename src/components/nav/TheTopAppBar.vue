<template>
    <v-app-bar color="red-darken-1 " class="py-2 px-2 text-yellow-accent-2">
        <v-app-bar-title>
            <h1 class="my-2">VuePizza!</h1>
        </v-app-bar-title>
        <v-badge v-if="getOrders.length > 0" location="top start" :content="getOrders.length"
            color="white text-red-darken-1">
            <v-btn icon="mdi-basket" @click="showCartDrawer"  class="mr-2">
                <v-icon size="large"></v-icon>
            </v-btn>
        </v-badge>
        <v-btn v-else icon="mdi-basket" @click="showCartDrawer"  class="mr-2">
            <v-icon size="large"></v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer temporary elevation="1" location="right" v-model="showDrawer" class="py-4">
        <v-container class="overflow-y-auto">
            <v-row class="text-red-darken-1">
                <v-col class="d-flex justify-center pb-0">
                    <h2>ORDERS</h2>
                </v-col>
            </v-row>
            <v-row>
                <OrdersList :aligncenter="aligncenter"></OrdersList>
            </v-row>
            <v-row v-if="getOrders.length > 0">
                <v-col class="d-flex justify-center">
                    <h5>TOTAL: </h5>
                </v-col>
                <v-col class="d-flex justify-center">
                    <h5>${{ getCartTotal.toFixed(2) }}</h5>
                </v-col>
            </v-row>
            <v-row v-if="getOrders.length > 0" align-self="end">
                <v-col class="d-flex justify-center">
                    <v-btn @click="checkout()" color="red-darken-1 text-yellow-accent-2">checkout</v-btn>
                </v-col>
            </v-row>
        </v-container>

    </v-navigation-drawer>
</template>

<script>
import OrdersList from '@/components/orders/OrdersList.vue';

export default {
    components: {
        OrdersList
    },
    data() {
        return {
            showDrawer: false,
            aligncenter: true
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters['cart/cartItems']
        },
        getOrders() {
            return this.$store.getters['orders/getOrders']
        },
        getCartTotal() {
            return this.$store.getters['cart/getCartTotal']
        }
    },
    watch: {

    },
    methods: {
        showCartDrawer() {
            this.showDrawer = !this.showDrawer
        },
        checkout() {
            const theDate = new Date()
            const hour = theDate.getHours().toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            const minutes = theDate.getMinutes().toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            let theTime = ''
            if (hour >= 12) {
                theTime = hour + ':' + minutes + ' PM'
            } else {
                theTime = hour + ':' + minutes + ' AM'
            }

            const orderHistoryItem = {
                id: '',
                date: theDate.toDateString(),
                time: theTime,
                total: this.getCartTotal,
                duration: this.$store.getters['cart/getOrderDuration'],
                order: this.getOrders
            }
            this.$store.dispatch('orders/addToOrderHistory', orderHistoryItem)
            setTimeout( () => {
                this.$store.dispatch( 'notifications/addToNotifications', orderHistoryItem )
            }, orderHistoryItem.duration )
            this.$store.dispatch('orders/clearOrders')
            this.showCartDrawer()
            this.$store.dispatch('cart/resetCartTotal')
        }
    }
}
</script>

<style></style>