<template>
  <div style="position: relative; z-index: 3">
    <v-toolbar
      class="grey darken-3"
      fixed
    >
      <v-toolbar-title class="font-weight-bold">Track List</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-toolbar-items>
        <v-btn
          elevation="0"
          v-for="(route, index) in $router.options.routes"
          :key="index"
          :to="route.path"
          class="transparent m-0"
          exact-active-class="font-weight-bold blue--text"
          >
          {{ route.name }}
        </v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.v-btn:focus:before {
    opacity: 0;
}
</style>