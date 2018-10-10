
<template lang="pug">
  v-app(:style={overflow: 'hidden'})
    AppBar(:title="appBar.title" :clipped="appBar.clipped" :menu="appBar.tabs")
    v-content
      v-container(fluid)
        v-layout(column align-center)
          v-fade-transition(mode="out-in")
            router-view
    v-footer(:fixed="fixed" app)
      span(:style="{ padding: '10px'}") &copy; 2018
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AppBar from './components/AppBar.vue';
import { mapGetters } from 'vuex';

@Component({
  name: 'App',
  components: {
    AppBar,
  },
  computed: {
    ...mapGetters([
      'appBar',
    ]),
  },
})

export default class App extends Vue {
  public fixed: boolean = false;
  private darkTheme: boolean = false;
}
</script>

<style lang="stylus">
::-webkit-scrollbar
  display: none
</style>
