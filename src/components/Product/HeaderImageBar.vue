<template lang="html">
  <div class="headerImageBar">
    <span>50% off summer collection</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.headerImageBar{
  background-image: url(/static/images/product/50OffImg.jpg);
  background-size: cover;
  width: 100%;
  span{
    font-size: 2.5em;
    text-align: center;
    display: flex;
    justify-content: center;
    color: #fff;
    text-transform: uppercase;
    margin: 20px 0;
    font-weight: 300;
    letter-spacing: 10px;
  }
}
</style>
