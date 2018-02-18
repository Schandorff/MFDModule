<template>
  <div id="app">
    <global-header></global-header>
      <router-view/>
      <global-footer></global-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default{
  name: 'App',
  components: {
    'global-header': Header,
    'global-footer': Footer
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss'
</style>
