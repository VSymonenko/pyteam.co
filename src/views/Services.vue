<template lang="pug">
  v-container(fluid d-flex :style={'min-height': '100%', 'justify-content': 'center', 'flex-direction': 'column' })
    PageHeader(:header='$t(`pageHeader.services.header`, language)')
    MainView
      PhotoCollage
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { PhotoCollage } from '@/components/Services';

@Component({
  name: 'Services',
  components: {
    PhotoCollage,
  },
  computed: {
    ...mapGetters([
      'language',
    ]),
  },
})

export default class Services extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
