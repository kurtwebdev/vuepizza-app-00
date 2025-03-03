<template>
    <v-sheet elevation="12" class="" style="z-index: 2;">
        <v-tabs align-tabs="center" color="red-darken-1" height="auto" class="pa-2">
            <v-tab value="home" @click="changeTab" :to="{ name: 'home' }" class="pa-2">
                <v-btn color="red-darken-1 text-yellow-accent-2" icon="mdi-home" value="home"
                    :to="{ name: 'home' }"></v-btn>
            </v-tab>
            <v-tab value="orders" @click="changeTab" :to="{ name: 'orders' }" class="pa-2">
                <v-btn color="red-darken-1 text-yellow-accent-2" icon="mdi-note-text" value="orders"
                    :to="{ name: 'orders' }"></v-btn>
            </v-tab>
            <v-tab value="settings" @click="changeTab" :to="{ name: 'settings' }" class="pa-2">
                <v-btn color="red-darken-1 text-yellow-accent-2" icon="mdi-cog" value="settings"
                    :to="{ name: 'settings' }"></v-btn>
            </v-tab>
            <v-tab value="notifications" @click="changeTab" :to="{ name: 'notifications' }">
                <v-badge v-if="getNotifications.length > 0" :content="getNotifications.length" class=" my-2">
                    <v-btn color="red-darken-1 text-yellow-accent-2" icon="mdi-bell" value="notifications"
                        :to="{ name: 'notifications' }"></v-btn>
                </v-badge>
                <v-btn v-else color="red-darken-1 text-yellow-accent-2" icon="mdi-bell" value="notifications"
                    :to="{ name: 'notifications' }"></v-btn>
            </v-tab>
        </v-tabs>
    </v-sheet>
</template>

<script>
export default {
    emits: ['changetab'],
    data() {
        return {
            tool: true
        }
    },
    computed: {
        getNotifications() {
            return this.$store.getters[ 'notifications/getNotifications' ]
        }
    },
    methods: {
        changeTab(e) {
            if (e.target.tagName == 'A') {
                this.$emit('changetab', e.target.getAttribute("value"))
            } else if (e.target.tagName == 'I') {
                this.$emit('changetab', e.target.offsetParent.value)
            } else if (e.target.tagName == 'SPAN') {
                if (e.target.previousElementSibling.value) {
                    this.$emit('changetab', e.target.previousElementSibling.value)
                } else {
                    this.$emit('changetab', e.target.offsetParent.value)
                }
            } else {
                this.$emit('changetab', e.target.value)
            }
        },
    }
}
</script>

<style></style>