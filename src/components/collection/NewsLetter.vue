<template lang="html">
<div class="newsLetterContainer">
<input name="email" v-validate="'required|email'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="your email">
<button type="button" name="button">Subscribe to our newsletter</button>
<div class="errorMsg">
<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
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
$phoneQuery: "only screen and (max-width : 780px)";

.newsLetterContainer{
  background-color: #33d0de;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 75px 0;
  @media #{$phoneQuery}{
    flex-direction: column;
    align-items: center;
    button{
      margin-top: 20px;
      line-height: 40px;
    }
  }
  input{
    border: 1px solid white;
    background-color: transparent;
    line-height: 40px;
    text-align: center;
    color: white;
    margin: 0 5px;
    width: 250px;
    text-transform: uppercase;
    &::placeholder{
      color: #fff;
    }
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
        text-transform: uppercase;
      }
  }
  .errorMsg{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 50px;
    text-align: center;
    color: #ff3860;
    font-size: 12px;
  }
}
</style>
