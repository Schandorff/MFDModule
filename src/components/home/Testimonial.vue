<template lang="html">

<div class="testimonialContainer">
  <carousel :perPage="1">
    <slide v-for="testimonial in testimonials" :key="testimonial.id">
      <div class="testimonialSlide">
      <img v-bind:src="testimonial.image" v-bind:alt="testimonial.name">
      <h3>{{testimonial.name}}</h3>
      <p>{{testimonial.body}}</p>
      </div>
    </slide>
  </carousel>
</div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'testimonial-comp',
  data: function(){
    return {
      testimonials: []
    }
  },
  created: function() {
      this.getTestimonials()
  },
  methods:{
    getTestimonials: function(){
      axios.get("/static/testimonials.json")
      .then(response => {this.testimonials = response.data})
      .catch(error =>{
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss">
$phoneQuery: "only screen and (max-width : 780px)";
.testimonialContainer{
  background-color: #33d0de;
  display: flex;
  justify-content: center;
  padding: 50px 0;
    .testimonialSlide{
      max-width: 755px;
      text-align: center;
      margin: 0 auto;
      padding: 0 20px;
      color: #fff;
      @media #{$phoneQuery}{
        padding: 0 10px;
        max-width: 300px;
      }
      img{
        border-radius: 50%;
        border: 6px solid #71dee8;
      }
      p{
        font-style: italic;
        font-weight: 300;
      }
    }
    .VueCarousel-dot > div{
      background: transparent!important;
      border: 1px solid #fff;
    }
    .VueCarousel-dot--active{
       div{
        background: #fff!important;
      }
    }
}
</style>
