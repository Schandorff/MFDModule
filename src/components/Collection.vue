<template lang="html">
<div class="outerContainer">
  <collection-header>
  </collection-header>

  <products-area>
  </products-area>
  <div class="mainContainer">
  </div>

</div>

</template>

<script>
import CollectionHeader from '@/components/collection/CollectionHeader'
import Products from '@/components/collection/Products'


export default {
  name: 'Collection',
  components: {
    'collection-header': CollectionHeader,
    'products-area': Products
  }
}
</script>

<style lang="scss">
</style>
