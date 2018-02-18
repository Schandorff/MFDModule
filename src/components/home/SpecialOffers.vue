<template lang="html">
  <div class="offersContainer">
    <div class="item1">
      <img src="../../assets/images/Homepage/MustHaveForHerFull.jpg" alt="Commercial">
    </div>
    <div class="item2">
      <img src="../../assets/images/Homepage/75PercentOffFull.jpg" alt="Commercial">
    </div>
    <div class="item3">
      <img src="../../assets/images/Homepage/NewSummerStyleFull.jpg" alt="Commercial">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.offersContainer{
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-template-areas:
  "left rightOne"
  "left rightTwo";
  .item1{
    grid-area: left;
  }
  .item2{
    grid-area: rightOne;
  }
  .item3{
    grid-area: rightTwo;
  }
}
</style>
