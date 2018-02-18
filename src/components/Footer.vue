<template lang="html">

<div class="footerOuter">
<div class="socialMediaOuter">
  <h3>Get us on</h3>
  <div class="socialMediaInner">
    <ul>
      <li v-for="logo in socialLogos" :key="logo.id">
        <a :href="logo.link" target="_blank">
        <img v-bind:src="logo.img" v-bind:alt="logo.media">
        </a>
      </li>
    </ul>
  </div>
</div>
<div class="bottomFooter">
  <div class="innerBottomFooter mainContainer">
    <div class="footerMenu1">
      <h4>Questions?</h4>
      <ul>
        <li><a href="#">Help</a></li>
        <li><a href="#">Tack order</a></li>
        <li><a href="#">Returns</a></li>
      </ul>
    </div>
    <div class="footerMenu2">
      <h4>Where to buy?</h4>
      <ul>
        <li><a href="#">Store locater</a></li>
        <li><a href="#">Wishlist</a></li>
        <li><a href="#">Gift cards</a></li>
      </ul>
    </div>
    <div class="footerMenu3">
      <h4>About us</h4>
      <ul>
        <li><a href="#">Our story</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Affiliates</a></li>
      </ul>
    </div>
    <div class="footerImg">
      <img src="../../static/images/creditcards.png" alt="">
    </div>
    <div class="footerImg footerLogo">
      <img src="../assets/images/Header/classy.png" alt="">
      <p>Ecommerce PSD theme</p>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  data: function(){
    return{
    socialLogos: [
      {media:'tumblr', img: './static/images/logos/100h/tumblr.png', link: 'https://www.facebook.com/classy'},
      {media:'youtube', img: './static/images/logos/100h/youtube.png', link: 'https://www.facebook.com/classy'},
      {media:'facebook', img: './static/images/logos/100h/facebook.png', link: 'https://www.facebook.com/classy'},
      {media:'pinterest', img: './static/images/logos/100h/pinterest.png', link: 'https://www.facebook.com/classy'},
      {media:'twitter', img: './static/images/logos/100h/twitter.png', link: 'https://www.facebook.com/classy'},
      {media:'googlep', img: './static/images/logos/100h/googlep.png', link: 'https://www.facebook.com/classy'}

  ]}
  }
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
.footerOuter{
  .socialMediaOuter{
    padding-bottom: 50px;
      h3{
        font-size: 24px;
        text-transform: uppercase;
        margin: 30px 0;
        text-align: center;
        font-weight: 300px;
        &:before{
          border-top: .1rem solid black;
          content: "";
          display: inline-block;
          width: 100px;
          margin-bottom: 7px;
          margin-right: 10px;
        }
        &:after{
          border-top: .1rem solid black;
          content: "";
          display: inline-block;
          width: 100px;
          margin-bottom: 7px;
          margin-left: 10px;
        }
      }
      .socialMediaInner{
        ul{
          list-style: none;
          display: grid;
          grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
          max-width: 755px;
          margin: 0 auto;
          li{
            border: 1px solid #c5c5c4;
            border-radius: 50%;
            height: 100px;
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
              img{
                @include transition(.5s)
                max-width: 30px;
                max-height: 30px;
                &:hover{
                  max-width: 35px;
                  max-height: 35px;
                }
              }
            }
          }
        }
      }
    }
    .bottomFooter{
      background-color: #333;
      padding: 45px 0;
      .innerBottomFooter{
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 3fr 3fr;
        >div{
          h4{
            color: #fff;
            font-weight: 300px;
          }
          ul{
            list-style: none;
            padding: 0px;
            li{
              margin: 10px 0;
            }
              a{
                text-decoration: none;
                color: #7b7b7b;
                &:hover{
                  color: #fff;
                }
              }
            }
        }
        .footerImg{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footerLogo{
          flex-direction: column;
          color: #7b7b7b;
          font-size: 12px;
        }
      }
    }

  }
</style>
