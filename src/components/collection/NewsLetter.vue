<template lang="html">
<div class="newsLetterContainer">
<input type="email" name="newsEmail" value="Your Email">
<button type="button" name="button">Subscribe to our newsletter</button>
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
.newsLetterContainer{
  background-color: #33d0de;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 75px 0;
  input{
    border: 1px solid white;
    background-color: transparent;
    line-height: 40px;
    text-align: center;
    color: white;
    margin: 0 5px;
    width: 250px;
    text-transform: uppercase;
  }
  button{
    background-color: white;
    border: 1px solid white;
    color: black;
    width: 250px;
    @include transition(.5s)
    text-transform: uppercase;
      &:hover{
        cursor: pointer;
        background-color: #333;
        color: white;
      }
  }
}
</style>
