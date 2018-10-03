<template lang="pug">
  div(clas='home')
    //- img(alt='Vue logo' src='../assets/logo.png')
    HelloWorld(:msg="$t('message')")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>