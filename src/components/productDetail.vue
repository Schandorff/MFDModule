<template lang="html">
  <div class="singleProductContainer">
    <header-image-banner title="50% off summer collection">
    </header-image-banner>
    <div class="productView mainContainer">
      <div class="previewThumbnails">
        <div><a href="#"><img class="selectedImg" v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title"></a></div>
        <div><a href="#"><img v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title"></a></div>
        <div><a href="#"><img v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title"></a></div>
        <div><a href="#"><img v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title"></a></div>
        <div><a href="#"><img v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title"></a></div>
      </div>
      <div class="productImage">
        <img v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title">
      </div>
      <div class="empty">

      </div>
      <div class="productInformation">
        <h1>{{product.title}}</h1>
        <div class="priceTag">
          <span class="price">${{product.price}}</span>
          <span class="shipping"><img src="/static/images/product/ShippingLogo.png">Free Shipping Worldwide</span>
        </div>
        <div class="productOptions">
          <div class="colourSelect">
            <select name="colour">
              <option>{{product.colour}}</option>
              <option>{{product.colour}}</option>
            </select>
          </div>
          <div class="optionsRow">
            <select name="colour">
              <option>{{product.size}}</option>
              <option>{{product.size}}</option>
            </select>
            <div class="sizeGuide"><a href="#"><img src="/static/images/product/SizeGuideLogo.png">Size guide</a></div>
          </div>
          <button class="addToBag productButton" type="button" name="addToBag"><img src="/static/images/icons/shoppingBag.png">Add to bag</button>
          <div class="optionsRow">
          <button class="saveForLater productButton" type="button" name="saveForLater">Save for later</button>
          <div class="sizeGuide shareButton"><a href="#"><img src="/static/images/product/ShareProductLogo.png">Share this product</a></div>
        </div>
          <tabs>
            <tab name="Description">
              <p>{{product.description}}</p>
            </tab>
            <tab name="Brand">
              <p>{{product.brand}}</p>
            </tab>
            <tab name="Info">
              <p v-if="product.onSale === true">
                This item is on sale! buy now!!!
              </p>
              <p v-else>
                This item is NOT on sale! buy anyway?
              </p>
            </tab>
          </tabs>
        </div>
        </div>
      </div>
      <inspiration>
      </inspiration>
      <bottom-banner>
      </bottom-banner>
    </div>

</template>

<script>
import Inspiration from '@/components/Product/Inspiration'
import BottomBanner from '@/components/Product/BottomBanner'
import HeaderImageBar from '@/components/Product/HeaderImageBar'


import axios from 'axios';
  export default{
    name: 'product-detail',
    components: {
      'inspiration': Inspiration,
      'bottom-banner': BottomBanner,
      'header-image-banner': HeaderImageBar
    },
    data: function() {
      return {
        product: '',
      }
    },
    created: function() {
    this.getProductById();
    },
    watch:{
      '$route' (to, from){
        this.getProductById();
      }
    },
    methods:{
      getProductById: function(){
        let id = this.$route.params.id;
        axios.get("/static/products.json")
        .then(response => {
          this.product = response.data.filter(product => product.id == id)[0];
          this.onsale = response.data.onSale;
          console.log(this.product.onSale);
        })
        .catch(error =>{
          console.log(error);
        })
      }
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
.headerContainer{
  background-color: #333;
}
.singleProductContainer{
  padding-top: 55px;
  display: grid;
  .productView{
    margin: 75px auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 5fr;
    grid-template-areas: "pPreview pImage empty pInfo";
    grid-gap: 20px;
    @media #{$phoneQuery}{
      grid-template-columns: 1fr;
      grid-template-areas: "pImage"
                           "pPreview"
                           "pInfo";
                           grid-gap: 20px 0;
    }
      .previewThumbnails{
        display: flex;
        justify-content: center;
        flex-direction: column;
        grid-area: pPreview;
        @media #{$phoneQuery}{
          flex-direction: row;
        }
          div{
            align-self: center;
            margin-bottom: 5px;
            }
            img{
              width: 70px;
              height: 91px;
            }
            .selectedImg{
              -webkit-box-shadow: 0px 3px 8px 3px rgba(0,0,0,0.25);
              -moz-box-shadow: 0px 3px 8px 3px rgba(0,0,0,0.25);
              box-shadow: 0px 3px 8px 3px rgba(0,0,0,0.25);
            }
          }
      .empty{
        grid-area: empty;
      }
      .productImage{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        grid-area: pImage;
      }
      .productInformation{
        grid-area: pInfo;
        @media #{$phoneQuery}{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1{
          font-weight: 300;
          @media #{$phoneQuery}{
            font-size: 22px;
          }
        }
        .priceTag{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 300px;
          .price{
            font-size: 22px;
            font-weight: 600;
          }
          .shipping{
            color: #979696;
            font-size: 14px;
            img{
              margin-right: 5px;
              vertical-align: middle;
            }
          }
        }
        .productOptions{
          margin: 20px 0;
          select{
            background-color: transparent;
            border: 2px solid #707070;
            line-height: 40px;
            width: 300px;
            border-radius: 0;
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
            margin: 5px 0;
            font-size: 14px;
            padding: 0 10px;
            @media #{$phoneQuery}{
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
          .optionsRow{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            @media #{$phoneQuery}{
              flex-wrap: wrap;
              flex-direction: column;
            }
            .sizeGuide{
              background-color: #eee;
              padding: 0 20px;
              a{
                line-height: 45px;
                text-decoration: none;
                color: black;
              }
              img{
                vertical-align: middle;
                margin-right: 10px;
              }
            }
            .shareButton{
              background-color: transparent;
              padding: 0;
            }
          }
          .productButton{
            width: 300px;
            text-transform: uppercase;
            margin: 5px 0;
            @include transition(.5s)
            border: none;
          }
          .addToBag{
            background-color: #33cfdd;
            color: #fff;
            padding: 15px 0;
            font-size: 20px;
            &:hover{
              background-color: #333;
              color: #fff;
              cursor: pointer;
            }
            img{
              margin-right: 15px;
            }
          }
          .saveForLater{
            background-color: #eeeeee;
            padding: 10px 0;
            font-size: 18px;
            color: #333;
            &:hover{
              background-color: #333;
              color: #fff;
              cursor: pointer;
            }
          }
        }
        .tabs-component{
          p{
            color: #a4a4a4;
          }
          ul{
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 0;
            width: 100%;
            li{
              padding: 10px 0;
              border-bottom: 1px solid #a4a4a4;
              width: 34.3333%;
              text-align: center;
              @media #{$phoneQuery}{
                width: 33.33%;
              }
              a{
                text-decoration: none;
                color: #333;
                font-size: 14px;
              }
            }
            .is-active{
                border-top: 1px solid #a4a4a4;
                border-bottom: none;
                border-right: 1px solid #a4a4a4;
                border-left: 1px solid #a4a4a4;
            }
          }
        }
      }

  }
}
</style>
