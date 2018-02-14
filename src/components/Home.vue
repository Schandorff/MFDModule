<template lang="html">

  <div class="mainContainer">
    <look-book>
    </look-book>

    <logo-slider>
    </logo-slider>

    <special-offers>
    </special-offers>

    <selected-products>
    </selected-products>

  </div>

</template>

<script>
import LookBooks from '@/components/home/LookBooks'
import LogoSlider from '@/components/home/LogoSlider'
import SpecialOffers from '@/components/home/SpecialOffers'
import SelectedProducts from '@/components/home/SelectedProducts'

export default {
  name: 'Home',
  components: {
    'look-book': LookBooks,
    'logo-slider': LogoSlider,
    'special-offers': SpecialOffers,
    'selected-products': SelectedProducts
  }
}
</script>

<style lang="css">
</style>
