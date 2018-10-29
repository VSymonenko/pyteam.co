<template lang="pug">
  v-container(fluid d-flex :style={'min-height': '100%', 'align-items': 'center', 'justify-content': 'center' }) {{ $options.name }}
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
