<template>
    <v-app-bar
      app
      class="grey darken-3"
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
        class="d-flex flex-row transparent"
        flat
      >
        <v-card
          v-for="(route, index) in $router.options.routes"
          :key="index"
          class="pa-2 mx-2 transparent"
          :to="route.path"
          exact-active-class="font-weight-bold blue--text"
          flat
          hover
        >{{ route.name }}
        </v-card>
      </v-card>
    </v-app-bar>
</template>

<script>
export default {
}
</script>

<style scoped>
.v-card--link:focus:before {
    opacity: 0;
}
</style>