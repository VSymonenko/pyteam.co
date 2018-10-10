<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(column align-center)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Services',
})

export default class Services extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
