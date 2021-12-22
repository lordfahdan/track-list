<template>
    <v-layout mt-6>
        <v-flex xs6 offset-xs3>
            <Panel title="Register">
                <div class="px-4 py-2">
                    <form 
                        name="tab-tracker-form"
                    >
                        <v-text-field
                            label="Email"
                            v-model="email"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Password"
                            v-model="password"
                            type="password"
                        ></v-text-field>
                    </form>
                    <br>
                    <div class="error" v-html="error"></div>
                    <br>
                    <v-btn
                        dark
                        class="cyan"
                        @click="register"
                    >

                    </v-btn>
                </div>
            </Panel>
        </v-flex>
    </v-layout>
</template>

<script>
import ApiAuthenticationServices from '@/services/ApiAuthenticationServices'
import Panel from '@/components/Panel'
export default {
    data: () => ({
        email: '',
        password: '',
        error: '',
        loading: false,
    }),
    methods: {
        register(){
            this.loading = true
            ApiAuthenticationServices.register({
                email: this.email,
                password: this.password
            })
            .then((result) => {
                const data = result.data
                
                this.$store.dispatch('setToken', data.token)
                this.$store.dispatch('setUser', data.user)
            }).catch((err) => {
                this.error = err.response.data.error
            })
            .finally(() => {
                this.loading = false
            })
        }
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>