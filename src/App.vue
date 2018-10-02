<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <!-- TODO: add router view -->
      <MainContent/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span :style="{ padding: '10px'}">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
    MainContent
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'mdi-chart-bubble',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'PyTeam'
    }
  }
}
</script>
