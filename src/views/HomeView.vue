<template>
  <v-container width="100%">
    <TheHeroCarousel></TheHeroCarousel>
    <MenuHome></MenuHome>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import MenuHome from '@/components/menu/MenuHome.vue'
import TheHeroCarousel from '@/components/ui/TheHeroCarousel.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    MenuHome,
    TheHeroCarousel
  },
});
</script>
