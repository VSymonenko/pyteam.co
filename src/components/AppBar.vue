<template lang="pug">
  v-toolbar(app :clipped-left="clipped" tabs)
    v-spacer(class="hidden-sm-and-down")
    v-toolbar-title(v-text="title")
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      v-btn(flat v-for="(tab, index) in menu" :key="index" :to="tab.path") {{ $t(`appBar.${tab.name}`, language) }}
    v-spacer
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'AppBar',
  props: {
    title: {
      type: String,
    },
    clipped: {
      type: Boolean,
    },
    menu: {
      type: [Array, Object],
    },
    language: {
      type: String,
    },
  },
})

export default class AppBar extends Vue {
  public active: number | null = null;
  private show: boolean = true;

  private mounted(): void {
    setTimeout(() => this.show = true, 500);
  }
}
</script>

<style lang="stylus">
</style>
