<template lang="pug">
    div(class='flex-row')
      v-spacer(class="hidden-sm-and-down" :style={width: '50%'})
      div
        slot
      v-spacer(class="hidden-sm-and-down" :style={width: '50%'})
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class MainView extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
