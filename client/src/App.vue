<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      class="white--text"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2 class="font-weight-bold white--text">Track List</h2>
      </div>

      <v-spacer></v-spacer>

      <v-card
        class="d-flex flex-row"
        color="primary"
        flat
      >
        <v-card
          v-for="(route, index) in $router.options.routes"
          :key="index"
          class="pa-2 white--text mx-2 transparent"
          :to="route.path"
          exact-active-class="font-weight-bold"
          flat
        >
          <v-hover>{{ route.name }}</v-hover>
        </v-card>
      </v-card>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <Particle />
  </v-app>
</template>

<script>
import Particle from '@/components/animation/AnimationParticle.vue'
export default {
  name: 'App',
  components: {
    Particle
  },
  data: () => ({
    //
  }),
};
</script>

<style src='./assets/css/style.css'></style>
