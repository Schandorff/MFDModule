<template lang="html">
  <div class="contactContainer">
    <header-image-banner title="Contact us">
    </header-image-banner>
    <div class="formContainer">
      <div class="innerFormContainer">
        <div class="inputContainer">
          <label>Name:</label>
          <input name="name" v-validate="'required|alpha'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
          <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </div>

        <div class="inputContainer">
            <label>Email:</label>
            <input name="email" v-validate="'required|email'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="your email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>

          </div>
        <div class="inputContainer">
          <label>Your message:</label>
          <textarea name="name" rows="4" cols="80" placeholder="Write something funny"></textarea>
        </div>
        <button type="button" name="button">Hit us up!</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImageBar from '@/components/Product/HeaderImageBar'
export default {
  name: 'contact',
  components: {
    'header-image-banner': HeaderImageBar
  }
}
</script>

<style lang="scss">
$phoneQuery: "only screen and (max-width : 780px)";

@mixin transition($duration) {
    -webkit-transition: $duration;
    -moz-transition: $duration;
    -ms-transition: $duration;
    -o-transition: $duration;
    transition: $duration;
}
.contactContainer{
    padding-top: 55px;
    display: grid;
    background-color: #33d0de;
    .formContainer{
      padding: 30px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      .innerFormContainer{
        width: 755px;
        display: flex;
        align-items: center;
        flex-direction: column;
        @media #{$phoneQuery}{
          width: 100%;
        }
        .inputContainer{
          margin-bottom: 20px;
          width: 100%;
          @media #{$phoneQuery}{
            display: flex;
            flex-direction: column;
            align-items: center;
            input, textarea{
              width: 80% !important;
            }
            label{
              align-self: center !important;
            }

          }
          label{
            align-self: flex-start;
            text-transform: uppercase;
            color: #fff;
          }
          input, textarea{
            background-color: transparent;
            border: 2px solid #fff;
            width: 100%;
            line-height: 35px;
            padding: 0 10px;
            font-size: 16px;
            &::placeholder{
              color: #fff;
            }
          }
        }
        button{
          background-color: white;
          border: 1px solid white;
          color: black;
          width: 250px;
          line-height: 35px;
          align-self: flex-start;
          font-size: 18px;
          @media #{$phoneQuery}{
              align-self: center;
          }
          @include transition(.5s)
          text-transform: uppercase;
            &:hover{
              cursor: pointer;
              background-color: #333;
              color: white;
              text-transform: uppercase;
            }
        }
      }
    }
}
.help{
      display: block;
      font-size: 11px;
      margin-top: 5px;
}
.help.is-danger {
    color: #ff3860;
}
span{
  font-style: inherit;
font-weight: inherit;
}
.input.is-danger, .textarea.is-danger {
    border-color: #ff3860;
}
</style>
