<template lang="html">
  <div class="threeCols">
    <div class="col colOne">
      <a href="#">
        <div class="overlayBk">
      <div>
        <h3>Men's</h3>
        <h4>lookbook</h4>
      </div>
    </div>
  </a>
    </div>
    <div class="col colTwo">
      <div class="outerDiv">
        <div class="innerDiv">
          <div class="mailContainer">
            <img src="../../assets/images/Homepage/MailIcon.png" alt="">
          </div>
          <h2>
            Get our newsletter
          </h2>
          <p>
            Join our maillist to recieve <br> special discounts
          </p>
          <input type="email" name="newsletter" value="" placeholder="Enter your email">
          <button type="button" name="button">Subscribe</button>
        </div>
      </div>

    </div>
    <div class="col colThree">
      <a href="#">
      <div class="overlayBk">
      <div>
      <h3>Women's</h3>
      <h4>lookbook</h4>
    </div>
    </div>
  </a>
    </div>
  </div>
</template>

<script>
export default {
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
.threeCols{
  display: grid;
  grid-template-columns: 3fr 5fr 3fr;
  grid-auto-rows: minmax(350px, 350px);
  margin: 50px 0;
  @media #{$phoneQuery}{
    grid-template-columns: 1fr;
  }
  .col{
    a{
      text-decoration: none;
    }
    &One{
      background-image: url(../../assets/images/Homepage/MensLookbookImage.jpg);
      background-size: cover;
    }
    &Three{
      background-image: url(../../assets/images/Homepage/WomensLookbookImage.jpg);
      background-size: cover;
    }
    &Two{
      .outerDiv{
        padding: 0 10px 10px 10px;
        -webkit-box-shadow: 0px 10px 7px 2px rgba(0,0,0,0.10);
        -moz-box-shadow: 0px 10px 7px 2px rgba(0,0,0,0.10);
        box-shadow: 0px 10px 7px 2px rgba(0,0,0,0.10);
        .innerDiv{
        border: 2px solid #dcdcdc;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        color: #333;
        text-align: center;
        height: 350px;
          .mailContainer{
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background-color: #33d0de;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          h2{
            font-size: 28px;
            margin: 10px;
            font-weight: 700;

          }
          p{
            color: #8b8b8b;
            margin: 0;
          }
          input{
            width: 80%;
            border: none;
            border-bottom: 2px solid #333;
            color: #333;
            font-size: 20px;
            text-align: center;
            padding: 15px 0;
            margin: 20px 0 15px 0;
            text-transform: uppercase;
          }
          button{
            width: 80%;
            border: 2px solid #333;
            padding: 15px 0;
            text-transform: uppercase;
            font-size: 20px;
            @include transition(.5s)
            &:hover{
              background-color: #333;
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
    .overlayBk{
      background-color:rgba( #000, .4 );
      height: 100%;
      display: flex;
      justify-content: center;

      >div{
        border: 1px solid #fff;
        text-align: center;
        color: #fff;
        align-self: center;
        padding: 15px 10px;
        font-size: 28px;
        h3{
          font-weight: bold;
          margin: 0;
          text-transform: uppercase;
        }
        h4{
          margin: 0;
          font-weight: 300;
          font-size: 40px;
        }

      }
    }
  }
}
</style>
