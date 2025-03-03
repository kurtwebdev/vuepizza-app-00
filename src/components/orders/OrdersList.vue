<template>
    <v-col :class="aligncenter ? 'd-flex justify-center pt-0' : 'd-flex justify-start pt-0'" class="px-4" >
        <div v-if="getOrders.length <= 0">
            <p>There are no current orders!</p>
        </div>
        <v-list v-else density="compact" width="100%">
            <v-list-item class="pa-0" v-for="order in getOrders" :key="order.id">
                <template v-slot:append>
                    <v-btn @click="removeOrder(order)" flat icon="mdi-trash-can"></v-btn>
                </template>
                <h3 class="capitalize">{{ order.item }}</h3>
                <div v-if="order.toppings">
                    <p>Toppings: </p>
                    <v-list density="compact" class="py-0">
                        <v-list-item class="py-0" v-for="(topping) in order.toppings"
                            :key="topping + order.id * Math.random()" density="compact">
                            <p>{{ topping }}</p>
                        </v-list-item>
                    </v-list>
                </div>
                <h4>Price: ${{ order.price.toFixed(2) }}</h4>
                <v-divider inset class="mx-auto my-4"></v-divider>
            </v-list-item>
            <h4>Total: ${{ getCartTotal.toFixed(2) }}</h4>
        </v-list>
    </v-col>
</template>

<script>
export default {
    props: [ 'aligncenter' ],
    computed: {
        getOrders() {
            return this.$store.getters['orders/getOrders']
        },
        getCartTotal() {
            return this.$store.getters['cart/getCartTotal']
        }
    },
    methods: {
        removeOrder( order ) {
            this.$store.dispatch('orders/removeOrder', order)
            this.$store.dispatch( 'cart/removeFromTotal', order )
        }
    }
}
</script>

<style></style>