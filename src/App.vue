
<template lang="pug">
  v-app(:style={overflow: 'hidden'})
    AppBar(:title="title" :clipped="clipped" :menu="tabs")
    v-content
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          v-layout(column align-center)
            router-view
    v-footer(:fixed="fixed" app)
      span(:style="{ padding: '10px'}") &copy; 2018
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AppBar from './components/AppBar.vue';

@Component({
  name: 'App',
  components: {
    AppBar,
  },
})

export default class App extends Vue {
  public clipped: boolean = false;
  public fixed: boolean = false;
  protected title: string = 'PyTeam';
  private darkTheme: boolean = false;
  private tabs: Array<object | null> = [
    { name: 'About', link: '/' },
    { name: 'Team', link: '/team' },
    { name: 'Services', link: '/services' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];
}
</script>

<style lang="stylus">
::-webkit-scrollbar
  display: none
</style>
