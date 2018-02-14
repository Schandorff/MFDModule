<template>
  <div id="app">
    <global-header></global-header>
      <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default{
  name: 'App',
  components: {
    'global-header': Header
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss'
</style>
