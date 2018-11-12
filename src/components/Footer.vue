<template lang="pug">
  v-footer(app :style="{ padding: '10px'}")
    span &copy; 2018
    v-layout(justify-end)
      v-btn-toggle(v-model="text" mandatory class="v-footer")
        v-btn(flat v-for="(lang, index) in languages" :value="lang" :key="lang") {{ lang }}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { NoCache } from '@/decorators';

@Component({
  name: 'Footer',
  props: {
    language: {
      type: String,
    },
    languages: {
      type: Array,
    },
  },
})

export default class Footer extends Vue {
  @NoCache
  get text(): string {
    return this.$props.language;
  }

  set text(value: string) {
    this.$emit('set-language', value);
  }
}
</script>

<style lang="stylus">
.v-btn-toggle--selected
  box-shadow none
</style>
