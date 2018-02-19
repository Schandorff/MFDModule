<template lang="html">
<div class="outerContainer">
  <collection-header>
  </collection-header>

  <products-area>
  </products-area>
  <news-letter>
  </news-letter>

</div>

</template>

<script>
import CollectionHeader from '@/components/collection/CollectionHeader'
import Products from '@/components/collection/Products'
import NewsLetter from '@/components/collection/NewsLetter'


export default {
  name: 'Collection',
  components: {
    'collection-header': CollectionHeader,
    'products-area': Products,
    'news-letter': NewsLetter
  }
}
</script>

<style lang="scss">
</style>
