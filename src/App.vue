<template lang="pug">
  transition(name="app")
    v-app(:style={overflow: 'hidden'} v-show="show")
      AppBar(:title="appBar.title" :clipped="appBar.clipped" :menu="appBar.tabs")
      v-content
        AwesomeSwiper(:tab-routes="appBar.tabs" :colors="colors")
          router-view
      v-footer(:fixed="fixed" app)
        span(:style="{ padding: '10px'}") &copy; 2018
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AppBar from './components/AppBar.vue';
import { mapGetters } from 'vuex';
import AwesomeSwiper from '@/components/AwesomeSwiper.vue';

@Component({
  name: 'App',
  components: {
    AppBar,
    AwesomeSwiper,
  },
  computed: {
    ...mapGetters([
      'appBar',
      'colors',
    ]),
  },
})

export default class App extends Vue {
  public fixed: boolean = false;
  private darkTheme: boolean = false;
  private show: boolean = false;

  private mounted(): void {
    setTimeout(() => this.show = true, 500);
  }
}
</script>

<style lang="stylus">
::-webkit-scrollbar
  display: none
.app-enter-active, .app-leave-active {
  transition: opacity .5s;
}
.app-enter, .app-leave-to /* .app-leave-active  */ {
  opacity: 0;
}
</style>
