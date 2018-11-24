<template lang="pug">
  v-container(fluid)
    v-flex(:style={display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'center', 'max-width': '500px'})
      v-card(xs4 v-for='(photo, index) in photoCollection' :key='index' :style={width: '100px'})
        v-img(:src='photo' :lazy-src='photo' aspect-ratio="1")
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { NoCache } from '@/decorators';

@Component({
  name: 'PhotoCollage',
  props: {
    photos: {
      type: Array,
    },
  },
})

export default class Item extends Vue {
  public generateArray(length: number = 20, value: string, random: boolean): string[] {
    const randomNumber = (): number | string  => random
      ? Math.floor(Math.random() * 100)
      : '';
    return Array.from(Array(length), (_, x) => value + randomNumber());
  }

  @NoCache
  get photoCollection(): string[] {
    return this.$props.photos || this.generateArray(12, 'https://picsum.photos/500/300?image=', true);
  }
}
</script>

<style lang="stylus" scoped>
img
  margin 0
</style>
