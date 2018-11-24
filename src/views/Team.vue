<template lang="pug">
  v-container(fluid d-flex :style={'min-height': '100%', 'justify-content': 'center', flexDirection: 'column' })
    PageHeader(:header='$t(`pageHeader.team.header`, language)')
    MainView
      div(class='flex-row' style={ flexWrap: 'wrap' })
        Teammate(
          style={ margin: '10px' }
          v-for='(member, index) in team'
          :key='index'
          :photo='member.photo'
          :fullName='member.name'
          :description='member.description')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import Teammate from '@/components/Teammate.vue';

@Component({
  name: 'Team',
  components: {
    Teammate,
  },
  computed: {
    ...mapGetters([
      'language',
      'team',
    ]),
  },
})

export default class Team extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
