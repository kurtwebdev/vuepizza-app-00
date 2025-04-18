<template>
  <v-sheet elevation="2" class="ma-2" width="300px">
    <v-container>
    <v-row>
      <v-col>
        <v-img :src="item.itemThumbImg" aspect-ratio="16/9" height="180" cover></v-img>
      </v-col>      
    </v-row>
    <v-row>
      <v-col>
        <h4 class="capitalize">{{ item.title }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p >{{ truncateDescription }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <span style="font-weight: bold;">${{ item.price }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <MenuItemDialog :item="item" :hasToppings="hasToppings"></MenuItemDialog>        
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn @click="addOrder" size="small" rounded="xl" color="red-darken-1 text-yellow-accent-2">Add To Order</v-btn>
      </v-col>
    </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import MenuItemDialog from '../ui/MenuItemDialog.vue';

export default {
  props: [ 'item', 'hasToppings' ],
  components: { MenuItemDialog },
  data(){
    return {
      
    }
  },
  computed: {
    truncateDescription(){
      const numberOfCharacters = 100
      const text = this.item.description
      if ( text <= numberOfCharacters ) {
        return text
      }
      return text.slice( 0, numberOfCharacters ) + '...'
    }
  },
  methods: {
    addOrder() {
      let order = {
        id: '',
        item: this.item.title,
        toppings: undefined,
        price: this.item.price,
        duration: this.item.duration
      }
      this.$store.dispatch( 'orders/addOrder', order )
      this.$store.dispatch( 'cart/addToTotal', order )
    }
  }
}
</script>

<style>
  .capitalize {
    text-transform: capitalize;
  }
</style>