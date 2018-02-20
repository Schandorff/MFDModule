<template lang="html">
<div class="mainContainer">
  <div class="sortingContainer">
    <span>New collection (1-32 of 58)</span>
    <span>Sort by</span>
    <select v-model="features" v-on:change="sortByFeatures(features)">
      <option value="short">Short</option>
      <option value="long">Long</option>
    </select>
    <select v-model="size" v-on:change="sortBySize(size)">
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
    </select>
    <select v-model="colour" v-on:change="sortByColour(colour)">
      <option value="black">Black</option>
      <option value="white">White</option>
    </select>
  </div>

  <ul class="productContainer">
    <li v-for="product in products" v-bind:key="product.id">
      <div class="productItem">
        <img class="productImage" v-bind:src="'/static/images/' + product.image" v-bind:alt="product.title">
        <h4 class="productTitle">{{product.brand}}{{product.title}}</h4>
        <div class="bottomLine">
        <span class="productPrice">${{product.price}}</span>
        <button type="button" name="addToBag"><img src="/static/images/bagGray.png" alt="add to bag">
          <span>Add to bag</span>
        </button>
        </div>
      </div>
    </li>
  </ul>
</div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'product-collection',
  data: function(){
    return{
    products: [],
    features: 'Features',
    size: 'Size',
    colour: 'Colour',
    price: 'Price'
  }
  },
  created: function() {
      this.getAllProducts()
  },

methods: {
  getAllProducts: function() {

    axios.get("/static/products.json")
      .then(response => {
        this.products = response.data
      })
      .catch(error =>{
        console.log(error);
      })
  },
    sortByFeatures: function(features) {
      axios.get("/static/products.json")
        .then(response => {
          this.products = response.data.filter(product => product.features == features);
        })
        .catch(error =>{
          console.log(error);
        })
    },
    sortBySize: function(size) {
      axios.get("/static/products.json")
        .then(response => {
          this.products = response.data.filter(product => product.size == size);
        })
        .catch(error =>{
          console.log(error);
        })
    },
    sortByColour: function(colour) {
      axios.get("/static/products.json")
        .then(response => {
          this.products = response.data.filter(product => product.colour == colour);
        })
        .catch(error =>{
          console.log(error);
        })
    }
}
}
</script>

<style lang="scss">

.sortingContainer{
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  select{
    border: 1px solid #333;
    background-color: transparent;
    border-radius: 0;
  }
}
.productContainer{
  margin-bottom: 75px;
}
</style>
