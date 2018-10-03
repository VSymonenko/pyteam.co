<template lang="pug">
  v-app
    v-toolbar(app :clipped-left="clipped")
      v-toolbar-title(v-text="title")
      v-spacer
    v-content
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          v-layout(column align-center)
            router-view
    v-footer(:fixed="fixed" app)
      span(:style="{ padding: '10px'}") &copy; 2018
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'PyTeam',
    };
  },
})

export default class App extends Vue {}
</script>

<style lang="stylus">
</style>
