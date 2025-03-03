<template>
    <v-col>
        <v-list density="compact" width="100%">
            <v-list-item elevation="3" class="pa-4 ma-2" v-for="orderItem in getOrderHistory" :key="orderItem.date">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                        <h3 class="capitalize">{{ orderItem.date }}, {{ orderItem.time }}
                        </h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <h4>Order<span v-if="orderItem.order.length > 1">s</span>: </h4>
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
        getOrderHistory() {
            return this.$store.getters['orders/getOrderHistory']
        }
    },
}
</script>

<style></style>