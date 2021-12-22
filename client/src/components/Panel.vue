<template>
  <v-layout mt-12>
    <v-flex>
      <div class="grey darken-1 elevation-2">
        <v-toolbar flat dense class="grey darken-3" dark>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <slot name="action" />
        </v-toolbar>


        <div class="px-4 py-2 grey darken-1">
          <slot>
            No slot content defined.
          </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
};
</script>

<style>
</style>