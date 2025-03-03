<template>
    <v-row>
        <v-col>
            <v-card elevation="4" class="pb-4">
                <v-card-title>
                    <h2>Menu</h2>
                </v-card-title>
                <v-card-text>
                    <div v-for="section in getMenuArray" :key="section.id">
                        <MenuSection v-if="section.sectionName != 'toppings'" :sectionname="section.sectionName"
                            :sectionitems="section.sectionItems"></MenuSection>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
import MenuSection from './MenuSection.vue';

export default {
    components: {
        MenuSection
    },
    computed: {
        getMenuArray() {
            return this.$store.getters['menu/getMenuData']
        }
    }
}
</script>

<style>
.section-name {
    text-transform: capitalize;
}
</style>