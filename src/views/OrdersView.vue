<template>
  <v-container width="100%">
    <v-sheet elevation="8" class="my-8 mx-4">
     <v-row class="pa-4">
      <v-col>
        <h2>Orders</h2>
      </v-col>
     </v-row>
     <v-divider inset class="mx-auto my-1"></v-divider>
     <v-row class="pa-4">
        <OrdersList :aligncenter="aligncenter"></OrdersList>
     </v-row>
    </v-sheet>
    <v-sheet elevation="8" class="my-8 mx-4" v-if="getOrderHistory.length > 0 ">
      <v-row class="pa-4">
      <v-col>
        <h2>Order History</h2>
      </v-col>
     </v-row>
     <v-divider inset class="mx-auto my-1"></v-divider>
     <v-row>
      <v-col>
        <OrderHistoryList></OrderHistoryList>
      </v-col>
     </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import OrdersList from '@/components/orders/OrdersList.vue'
import OrderHistoryList from '@/components/orders/OrderHistoryList.vue';

export default {
components: {
  OrdersList,
  OrderHistoryList
},
data(){
  return {
    aligncenter: false
  }
},
computed: {
  getOrders() {
    return this.$store.getters[ 'orders/getOrders' ]
  },
  getOrderHistory() {
    return this.$store.getters[ 'orders/getOrderHistory' ]
  }
}
}
</script>

<style>

</style>