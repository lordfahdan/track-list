<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>

    <Particle />
  </v-app>
</template>

<script>
import Particle from '@/components/animation/AnimationParticle.vue'
import Header from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    Particle,
    Header
  },
  data: () => ({
    //
  }),
};
</script>

<style src='./assets/css/style.css'></style>
