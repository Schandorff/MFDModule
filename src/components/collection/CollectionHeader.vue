<template lang="html">
<div class="colHeader">
  <div class="overlayBk">
    <span>Most wanted</span>
    <h1>New Collection</h1>
    <button type="button" name="button">Browse collection</button>
  </div>
</div>

</template>

<script>

export default {
}
</script>

<style lang="scss">
@mixin transition($duration) {
    -webkit-transition: $duration;
    -moz-transition: $duration;
    -ms-transition: $duration;
    -o-transition: $duration;
    transition: $duration;
}
.colHeader{
  width: 100%;
  height: 80vh;
  background-image: url(../../../static/images/HeaderImageLight.jpg);
  background-size: cover;
  .overlayBk{
    background-color:rgba( #000, .4 );
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-transform: uppercase;
    span{
      font-size: 32px;
      margin: 0;
      font-weight: 300;
      &:before{
        border-top: 1px solid #fff;
        content: "";
        display: inline-block;
        width: 200px;
        margin-bottom: 7px;
        margin-right: 10px;
      }
      &:after{
        border-top: 1px solid #fff;
        content: "";
        display: inline-block;
        width: 200px;
        margin-bottom: 7px;
        margin-left: 10px;
      }
    }
    h1{
      font-size: 72px;
      margin:0;
    }
    button{
      border: 2px solid #fff;
      padding: 10px 20px;
      color: #fff;
      background: transparent;
      font-size: 18px;
      @include transition(.5s)
      &:hover{
        background: #fff;
        color: #33d0de;
        cursor: pointer;
        z-index: 9999;
    }
  }
}
}
</style>
