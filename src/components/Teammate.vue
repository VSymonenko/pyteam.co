<template lang="pug">
  v-card(d-flex style={ height: '300px', width: '300px', justifyContent: 'center' } class='flex-column')
    div(class='flex-column' style={ height: '50%', justifyContent: 'center', 'margin-bottom': '20px' })
      v-avatar(size=150)
        img(v-if='photo' :src='photo')
        v-icon(v-else x-large) person
    div(class='flex-column' style={ justifyContent: 'space-between', height: '25%', width: '100%' })
      div(style={ backgroundColor: 'hsla(0, 0%, 47%, 0.2)', textAlign: 'center', minHeight: '42px', width: '100%', display: 'flex' })
        p(style={ margin: 'auto' }) {{ description }}
      div(style={ marginTop: '20px'}) {{ fullName }}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Teammate',
  props: {
    fullName: {
      type: String,
    },
    photo: {
      type: String,
    },
    description: {
      type: String,
    },
  },
})

export default class Teammate extends Vue {
}
</script>

<style lang="stylus" scoped>
img
  object-fit cover
</style>
