<template>
  <div style="position: relative; z-index: 3">
    <v-toolbar
      class="grey darken-3"
      fixed
    >
      <v-toolbar-title class="font-weight-bold mr-4">Track List</v-toolbar-title>

      <v-toolbar-items>
        <v-btn
          elevation="0"
          :to="{ name:'Songs' }"
          class="transparent m-0"
          exact-active-class="font-weight-bold blue--text"
          >
          Songs
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      
      <v-toolbar-items>
        <v-btn
          elevation="0"
          v-if="!$store.state.isUserLoggedIn"
          :to="{ name:'Login' }"
          class="transparent m-0"
          exact-active-class="font-weight-bold blue--text"
          >
          Login
        </v-btn>
        <v-btn
          elevation="0"
          v-if="!$store.state.isUserLoggedIn"
          :to="{ name:'Register' }"
          class="transparent m-0"
          exact-active-class="font-weight-bold blue--text"
          >
          Register
        </v-btn>
      </v-toolbar-items>

      <v-btn 
        icon
        v-if="$store.state.isUserLoggedIn"
        @click="logout"
      >
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name:'Home' })
    }
  }
}
</script>

<style scoped>
.v-btn:focus:before {
    opacity: 0;
}
</style>