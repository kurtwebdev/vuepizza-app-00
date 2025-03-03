<template>
  <v-row class="mt-4">
    <v-col>
      <h3 class="section-name">{{ sectionname }}</h3>
    </v-col>
  </v-row>
  <v-row>
    <v-slide-group v-model="model" >
      <v-slide-group-item v-for="item in sectionitems" :key="item.id">
        <MenuItem :item="item" :hasToppings="sectionname == 'desserts' || sectionname == 'drinks' ? false : true">
        </MenuItem>
      </v-slide-group-item>
    </v-slide-group>
  </v-row>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  props: ['sectionname', 'sectionitems'],
  components: {
    MenuItem
  },
  data() {
    return {
      model: null
    }
  }
}
</script>

<style>

</style>