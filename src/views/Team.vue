<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(column align-center)
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Team',
})

export default class Team extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
