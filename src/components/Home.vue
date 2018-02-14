<template lang="html">
<div class="outerContainer">
<header-slider></header-slider>
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
</div>

</template>

<script>
import LookBooks from '@/components/home/LookBooks'
import LogoSlider from '@/components/home/LogoSlider'
import SpecialOffers from '@/components/home/SpecialOffers'
import SelectedProducts from '@/components/home/SelectedProducts'
import SummerCampaign from '@/components/home/SummerCampaign'
import Testimonial from '@/components/home/Testimonial'
import HeaderSlider from '@/components/home/HeaderSlider'

export default {
  name: 'Home',
  components: {
    'look-book': LookBooks,
    'logo-slider': LogoSlider,
    'special-offers': SpecialOffers,
    'selected-products': SelectedProducts,
    'summer-campaign': SummerCampaign,
    'testimonial': Testimonial,
    'header-slider': HeaderSlider
  }
}
</script>

<style lang="css">
</style>
