<template>
  <div class="container-particle">
    <div class="circle-container" v-for="particle in 100" :key="'particle' + particle">
        <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-particle {
    position: fixed;
}
</style>