<template lang="pug">
  v-flex(:style="{ 'flex-direction': $vuetify.breakpoint.xsOnly ? 'column' : reverse ? 'row-reverse' : 'row' }" class='flex-row' style={ maxHeight: '250px'})
    div(class='flex-column' :style={ flex: '1 1 100%', margin: '10px', padding: '0 20px' })
      img(:src='img' v-if='img' :style="{ height: $vuetify.breakpoint.xsOnly ? '50px' : '100%', width: '100%' }")
    div(class='flex-column' :style={ flex: '1 1 100%', justifyContent: 'space-between', margin: '10px', padding: '0 20px' })
      h3(:style={ height: '40px', width: '100%'}) {{ title }}
      p(:style={ margin: 0, width: '100%', display: 'flex' }) {{ description }}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'AboutWorks',
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    reverse: {
      type: Boolean,
    },
  },
})

export default class AboutWorks extends Vue {
}
</script>

<style lang="stylus" scoped>
img
  object-fit cover
</style>
