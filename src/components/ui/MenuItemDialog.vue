<template>
    <v-dialog v-model="openDialog">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" size="small" rounded="xl" color="red-darken-1 text-yellow-accent-2">View
                Item</v-btn>
        </template>
        <v-sheet>
            <v-container>
                <v-row>
                    <v-col>
                        <h2 class="capitalize">{{ item.title }}</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <div :class="isMobile() ? 'd-flex flex-column' : 'd-flex flex-row'">
                        <v-col>
                            <v-img :src="item.itemMainImg"></v-img>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col>
                                    <p>{{ item.description }}</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <h3 v-if="item.ingredients.length">Ingredients:</h3>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-chip v-for="ingredient in item.ingredients" :key="ingredient"
                                        class="mr-2 mb-2 capitalize">
                                        {{ ingredient }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row>
                                        <v-col>
                                            <h3 v-if="hasToppings">Choose Optional Toppings:</h3>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-select v-if="hasToppings" elevation="4" v-model="toppingsInput" :items="toppings" label="" chips multiple
                                                clearable closable-chips>
                                            </v-select>
                                        </v-col>
                                        <v-col cols="2" class="d-flex justify-end">
                                            <h4>Price: ${{ itemPrice }}</h4>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                            </v-row>
                        </v-col>
                    </div>
                </v-row>
                <v-spacer></v-spacer>
                <v-row>
                    <v-col v-if="!isMobile()"></v-col>
                    <v-col v-if="!isMobile()"></v-col>
                    <v-col v-if="!isMobile()"></v-col>
                    <v-col v-if="!isMobile()"></v-col>
                    <v-col></v-col>
                    <v-col></v-col>
                    <v-col class="d-flex justify-center">
                        <v-btn @click="openDialog = false" size="small" rounded="xl"
                            color="red-darken-1 text-yellow-accent-2">Cancel</v-btn>
                    </v-col>
                    <v-col class="d-flex justify-center">
                        <v-btn @click="addOrder" size="small" rounded="xl"
                            color="red-darken-1 text-yellow-accent-2">Add
                            To
                            Order</v-btn>
                    </v-col>
                </v-row>
                <v-spacer></v-spacer>
            </v-container>
        </v-sheet>
    </v-dialog>
</template>

<script>
export default {
    props: ['item', 'hasToppings'],
    data() {
        return {
            toppingsInput: null,
            itemPrice: this.item.price, 
            order: {
                id: '',
                item: this.item.title,
                toppings: this.toppingsInput,
                price: this.item.price,
                duration: this.item.duration
            },
            openDialog: false
        }
    },
    computed: {
        toppings() {
            return this.$store.getters['menu/getToppingsNames']
        },
    },
    mounted() {
        this.isMobile()
    },
    watch: {
        toppingsInput() {
            const toppingsArray = this.$store.getters['menu/getToppingsArray']
            let orderPrice = this.item.price
            let orderDuration = this.item.duration

            toppingsArray.forEach(topping => { 
                this.toppingsInput.forEach(input => {
                    if (input == topping.title) {
                        orderPrice += topping.price
                        orderDuration += topping.duration
                    }
                })
            })            
            this.itemPrice = orderPrice.toFixed(2) 
            let order = {
                id: '',
                item: this.item.title,
                toppings: this.toppingsInput,
                price: orderPrice,
                duration: orderDuration
            }
            this.order = order        
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
        addOrder() {
            this.$store.dispatch( 'orders/addOrder', this.order )
            this.$store.dispatch( 'cart/addToTotal', this.order )
            // open cofirmation diaglog
            this.openDialog = false
            this.toppingsInput = []

        },
    }
}
</script>

<style></style>