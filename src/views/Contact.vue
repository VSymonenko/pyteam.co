<template lang="pug">
  v-container(fluid d-flex :style={'min-height': '100%'})
    PageHeader(:header='$t(`pageHeader.contact.header`, language)', :sub-header='$t(`pageHeader.contact.subHeader`, language)')
    MainView
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

@Component({
  name: 'Contact',
  computed: {
    ...mapGetters([
      'language',
    ]),
  },
})

export default class Contact extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
