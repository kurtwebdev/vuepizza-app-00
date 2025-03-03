<template>
  <v-container width="100%" >
    <v-sheet elevation="8" class="my-8 mx-4 px-2">
      <v-row class="pa-4">
        <v-col>
          <h2>Settings</h2>
        </v-col>
      </v-row>
      <v-divider inset class="mx-auto my-1"></v-divider>
      <v-row class="pa-4">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Theme Settings</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-container class="py-0">
                <v-row class="pa-0">
                  <v-col class="d-flex align-center pa-0" :class="isMobile() ? 'v-col-7' : 'v-col-2'">
                    <p>Set Theme Color:</p>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-start "><v-switch class="capitalize" v-model="theme" :label="theme"
                      false-value="dark" true-value="light" hide-details></v-switch></v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>About Us</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <AboutUs></AboutUs>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Contact Us</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <ContactUsForm></ContactUsForm>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import AboutUs from '@/components/about/AboutUs.vue'
import ContactUsForm from '@/components/ui/ContactUsForm.vue';

export default {
  components: {
    AboutUs,
    ContactUsForm
  },
  data() {
    return {
      theme: this.$store.getters['settings/getTheme']
    }
  },
  mounted() {
    this.isMobile()
  },
  watch: {
    theme() {
      this.$store.dispatch('settings/setTheme', { theme: this.theme })
    }
  },
  methods: {
    isMobile() {
      if (screen.width <= 801) {
        return true
      } else {
        return false
      }
    },
  }
}
</script>

<style></style>