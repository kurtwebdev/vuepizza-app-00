<template>
    <v-container>
        <v-row>
            <v-col>
                <v-form fast-fail @submit.prevent ref="contactForm" v-model="valid" lazy-validation>
                    <v-text-field label="First Name" v-model="firstname" :rules="firstnameRules"></v-text-field>
                    <v-text-field label="Last Name" v-model="lastname" :rules="lastnameRules"></v-text-field>
                    <v-text-field label="E-Mail" v-model="email" :rules="emailRules"></v-text-field>
                    <v-textarea label="Message" v-model="message" :rules="messageRules"></v-textarea>
                    <div class="d-flex justify-end">
                        <v-btn color="red-darken-1 text-yellow-accent-2" type="submit" @click="submit"> Submit</v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            valid: true,
            firstname: '',
            firstnameRules: [
                value => {
                    if (value) return true
                    return 'First Name is required.'
                },
            ],
            lastname: '',
            lastnameRules: [
                value => {
                    if (value) return true
                    return 'Last Name is required.'
                },
            ],
            email: '',
            emailRules: [
                value => {
                    if (value) return true
                    return 'E-mail is required.'
                },
                value => {
                    if (/.+@.+\..+/.test(value)) return true
                    return 'E-mail must be valid.'
                },
            ],
            message: '',
            messageRules: [
                value => {
                    if (value) return true
                    return 'Message is required.'
                }
            ]
        }
    },
    methods: {
        submit() {
            this.$refs.contactForm.validate().then(obj => {
                if (obj.valid) {
                    // open cofirmation diaglog
                    alert( 'Thank you for your message ' + this.firstname + '!' )
                    this.$refs.contactForm.reset()
                }
            })

        }
    }
}
</script>

<style></style>