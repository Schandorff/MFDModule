<template lang="html">
  <div class="campaignContainer">
    <div class="mainContainer campaignInnerContainer">

    <div class="leftBox">
      <span>All summer</span>
    </div>
    <div class="percentContainer">
      <img src="../../../static/images/Get25off.png" alt="">
    </div>
    <div class="rightBox">
      <span>Collection</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.campaignContainer{
  background-image: url(../../../static/images/25OffBG.jpg);
  background-size: cover;
  .campaignInnerContainer{
  height: 400px;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  align-content: center;
  align-items: center;
  justify-items: center;
  .percentContainer{
    border-radius: 50%;
    background-color:rgba(51, 208, 222, 0.8);
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    height: 275px;
    width: 275px;
    >img{
      margin-left: 20px;
    }
  }
  span{
    text-transform: uppercase;
    font-size: 42px;
    font-weight: 300;
    color: #fff;
  }
  .leftBox{
      justify-self: flex-end;
  }
  .rightBox{
      justify-self: flex-start;
  }
  }
}
</style>
