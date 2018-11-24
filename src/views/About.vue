<template lang="pug">
  v-container(fluid d-flex :style={'min-height': '100%', 'justify-content': 'center', flexDirection: 'column' })
    PageHeader(:header='$t(`pageHeader.about.header`, language)')
    MainView
      AboutWorks(
        v-for='(item, index) in aboutWorks'
        :img='item.img'
        :key='index'
        :style={margin: '10px'}
        :title='item.title'
        :description='item.description'
        :reverse='Boolean(index % 2 !== 0)')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import AboutWorks from '@/components/AboutWorks.vue';

@Component({
  name: 'About',
  components: {
    AboutWorks,
  },
  computed: {
    ...mapGetters([
      'language',
      'aboutWorks',
    ]),
  },
})

export default class About extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
