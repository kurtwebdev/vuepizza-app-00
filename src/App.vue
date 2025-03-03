<template>
  <v-app class="overflow-y-hidden" :theme="theme">
    <TheTopAppBar></TheTopAppBar>
    <v-main>
      <v-sheet class="pt-1 mb-16 overflow-y-auto">
        <router-view />
        <TheFooter></TheFooter>
      </v-sheet>
    </v-main>
    <TheBottomNav :tab="tab" @changetab="changetab" class="position-fixed bottom-0 left-0 right-0"></TheBottomNav>
  </v-app>
  
</template>

<script>
import TheTopAppBar from '@/components/nav/TheTopAppBar.vue'
import TheBottomNav from '@/components/nav/TheBottomNav.vue'
import TheFooter from '@/components/ui/TheFooter.vue'

export default {
  name: 'App',
  components: {
      TheTopAppBar,
      TheBottomNav,
      TheFooter
  },
  computed: {
    theme(){
      return this.$store.getters['settings/getTheme']
    }
  },
  data: () => ({
    tab: 'home',
  }),
  methods: {
    changetab( tab ){
      return this.tab = tab
    }
  }
}
</script>
