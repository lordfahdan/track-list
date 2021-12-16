<template>
    <v-main>
        <v-card
            :loading="loading"
            max-width="450"
            class="mx-auto my-12"
            shaped
            elevation="10"
            dark
            style="position: relative; z-index: 2; border: 3px solid #ffffff; background-color: rgba(255, 255, 255, 0.1)"
        >
            <template slot="progress">
                <v-progress-linear
                    color="blue darken-2"
                    height="6"
                    indeterminate
                ></v-progress-linear>
            </template>
            <v-flex
                column
                class="px-10 py-6"
            >
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mx-auto mb-10"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="80"
                />
                <h2>Register</h2>
                <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                ></v-text-field>
                <v-btn
                    color="success"
                    block
                    tile
                    class="py-6"
                    @click="register"
                    >
                    Register
                </v-btn>
                <p class="caption text-center mt-4 grey--text">You already have an Account? <router-link :to="{name: 'Login'}">Login</router-link></p>
            </v-flex>
        </v-card>
    </v-main>
</template>

<script>
import ApiServices from '@/services/ApiServices'
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
            ApiServices.register({
                email: this.email,
                password: this.password
            })
            .then((result) => {
                const data = result.data
                console.log(data)
            }).catch((err) => {
                this.error = err.response.data.error
            })
            .finally(() => {
                this.loading = false
            })
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>