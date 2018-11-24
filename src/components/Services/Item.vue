<template lang="pug">
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Item',
  props: {
    language: {
      type: String,
    },
    languages: {
      type: Array,
    },
  },
})

export default class Item extends Vue {
}
</script>

<style lang="stylus">
</style>
