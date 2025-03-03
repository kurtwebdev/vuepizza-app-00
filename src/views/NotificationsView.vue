<template>
  <v-container width="100%">
    <v-sheet elevation="8" class="my-8 mx-4">
     <v-row class="pa-4">
      <v-col>
        <h2>Notifications</h2>
      </v-col>
     </v-row>
     <v-divider inset class="mx-auto my-1"></v-divider>
     <v-row class="pa-4">
      <NotificationsList></NotificationsList>
     </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import NotificationsList from '@/components/notifications/NotificationsList.vue';

export default {
  components: {
    NotificationsList
  },
  methods: {

  }
}
</script>

<style>

</style>