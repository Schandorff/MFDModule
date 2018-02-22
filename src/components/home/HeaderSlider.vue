<template lang="html">
  <div class="slideContainer">
    <agile>
    <div class="slide slide--1">
      <div class="innerSliderContainer">
      <div>
    </div>
    <div>
    </div>
    <div>
      <button class="slideButton" a href="#">Learn more about great deals</button>
    </div>
    </div>
    </div>
    <div class="slide slide--1">
      <div class="innerSliderContainer">
      <div>
    </div>
    <div>
    </div>
    <div>
      <button class="slideButton" a href="#">Learn more about great deals</button>
    </div>
    </div>
    </div>
    <div class="slide slide--1">
      <div class="innerSliderContainer">
      <div>
    </div>
    <div>
    </div>
    <div>
      <button class="slideButton" a href="#">Learn more about great deals</button>
    </div>
    </div>
    </div>
    </agile>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$phoneQuery: "only screen and (max-width : 780px)";

.slideContainer{
  width: 100%;
  .slideButton{
    align-self: flex-end;
  }
}
.agile {
    &__dots {
        bottom: 0;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    }

    &__dot {
        button {
            background-color: transparent;
            border: 2px solid #fff;
            line-height: 20px !important;
            padding: 0px;
            margin: 20px 10px;

            &:hover {
                background-color: #fff;
            }
        }

        &--current {
            button {
                border: 2px solid #33d0de;
                line-height: 35px !important;
            }
        }
    }

    &__arrow {
        height: 100%;
        top: 0;
        width: 80px;
        border: none;
        bottom: 10px;
        margin: 0;
        padding: 0;
        position: absolute;
        transition-duration: .3s;
        background-color: transparent;
        &--next{
          right: 0;
        }
        @media only screen and (min-width : 780px){
        &:hover {
            background-color: rgba(#000, .5);

            svg {
                fill: #fff;
            }
        }
      }

        &[disabled] {
            display: none;
        }

        svg {
            fill: rgba(#fff, .4);
            height: 55px;
        }
    }
}

.slide {
    background: {
        position: center;
        size: cover;
    }
    height: 80vh;

    &:before {

        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    &--1 {
        background-image: url(../../assets/images/Header/HEADER.jpg);
    }
    .innerSliderContainer{
      margin: 0 auto;
      display: grid;
      grid-template-columns: 4fr 4fr 4fr;
      height: 100%;
      @media #{$phoneQuery}{
        grid-template-columns: 1fr;
      }
      div{
        display: flex;
        justify-content: space-around;
        .slideButton{
          text-transform: uppercase;
          border: 2px solid #fff;
          padding: 20px 30px;
          color: #fff;
          background: transparent;
          margin-bottom: 100px;
          z-index: 999999;
          font-size: 18px;
          &:hover{
            background: #fff;
            color: #33d0de;
            cursor: pointer;
            z-index: 9999;
          }
        }
      }
    }
}

</style>
