<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(column align-center)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'main-content',
})

export default class MainContent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
