<template lang="html">
<div class="logoSlider">
  <h3>Top Brands</h3>
  <div class="carrouselContainer">
  <carousel :perPage="5" :autoplay="true" :perPageCustom="[[480, 2], [981, 3], [1170, 5]]">
  <slide v-for="logo in logos" :key="logo.id">
    <img v-bind:src="logo.img" v-bind:alt="logo.name">
  </slide>
</carousel>
</div>

</div>
</template>

<script>
export default {
  data: function(){
    return{
    logos: [{name:'Pull & Bear', img: './static/images/logos/pullbearLogo.png'},
            {name:'Michael Kors', img: './static/images/logos/MichaelKorsTrans.png'},
            {name:'mango', img: './static/images/logos/MangoTrans.png'},
            {name:'Missguided', img: './static/images/logos/MissGuidedTrans.png'},
            {name:'Monki', img: './static/images/logos/MonkiTrans.png'},
            {name:'mango', img: './static/images/logos/MangoTrans.png'},
            {name:'mango', img: './static/images/logos/MangoTrans.png'},
            {name:'mango', img: './static/images/logos/MangoTrans.png'},
            {name:'mango', img: './static/images/logos/MangoTrans.png'}
  ]}
  }
}
</script>

<style lang="scss">

.logoSlider{
  margin: 50px 0;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  h3{
    font-size: 24px;
    text-transform: uppercase;
    margin: 30px 0;
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
  .carrouselContainer{
    align-self: center;
    margin: 30px 0 10px 0;
    .VueCarousel-pagination{
      margin: 50px 0 0 0;
      .VueCarousel-dot > div{
        background: rgb(0,0,0)!important;
      }
      .VueCarousel-dot--active{
        padding: 8px !important;
         div{
          background: transparent!important;
          width: 12px !important;
          height: 12px !important;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
