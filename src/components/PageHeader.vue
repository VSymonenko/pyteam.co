<template lang="pug">
  v-flex(:style={ display: 'flex', alignItems: 'center', flexDirection: 'column' })
    div(class='d-flex display-3') {{ header }}
    div(class='line')
    div(class='d-flex display-1' :style={ color: '#777777'} v-if='subHeader') {{ subHeader }}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { NoCache } from '@/decorators';

@Component({
  name: 'PageHeader',
  props: {
    header: {
      type: String,
    },
    subHeader: {
      type: String,
    },
  },
})

export default class PageHeader extends Vue {
}
</script>

<style lang="stylus" scoped>
.line
  background-color #777777
  height 1px
  width 15vh
  margin-bottom 10px
</style>
