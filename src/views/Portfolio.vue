<template lang="pug">
  v-container(fluid d-flex :style={'min-height': '100%', 'justify-content': 'center' })
    PageHeader(:header='$t(`pageHeader.portfolio.header`, language)')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

@Component({
  name: 'Portfolio',
  computed: {
    ...mapGetters([
      'language',
    ]),
  },
})

export default class Portfolio extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
