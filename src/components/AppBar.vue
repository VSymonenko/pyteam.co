
<template lang="pug">
  transition(name="bar" v-if="show")
    v-toolbar(app :clipped-left="clipped" tabs)
      v-spacer(class="hidden-sm-and-down")
      v-toolbar-title(v-text="title")
      v-spacer
      v-toolbar-items(class="hidden-sm-and-down")
        v-btn(flat v-for="(tab, index) in menu" :key="index" :to="tab.link") {{ tab.name }}
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
      type: Array,
    },
  },
})

export default class AppBar extends Vue {
  public active: number | null = null;
  private show: boolean = false;

  private mounted(): void {
    setTimeout(() => this.show = true, 500);
  }
}
</script>

<style lang="stylus">
.bar-enter-active, .bar-leave-active {
  transition: opacity .5s;
  transition-delay: 1.5s
}
.bar-enter, .bar-leave-to /* .bar-leave-active  */ {
  opacity: 0;
}
</style>
