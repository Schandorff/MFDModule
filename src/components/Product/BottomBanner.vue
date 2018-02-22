<template lang="html">
  <div class="bannerContainer">
    <div class="bannerEntry">
      <h3>Big Discounts</h3>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$phoneQuery: "only screen and (max-width : 780px)";
.bannerContainer{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/static/images/product/BigDiscountsImg.jpg);
  padding:150px 0;
  background-size: cover;
  .bannerEntry{
    border: 3px solid #fff;
    padding: 15px;
    h3{
      color: #fff;
      font-size: 34px;
      text-transform: uppercase;
      margin: 0px;
      letter-spacing: 10px;
      @media #{$phoneQuery}{
        font-size: 22px;
      }
    }
  }
}
</style>
