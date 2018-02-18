<template lang="html">
  <nav>
<div class="mainHeader">
 <div class="logoContainer">
   <router-link :to='"/"'><img src="../assets/images/Header/classy.png" alt="ClassyLogo"></router-link>
 </div>
 <div class="mainMenu">
   <ul>
     <li><a href="#"><img src="../assets/images/Header/login.png" alt="login">Login</a></li>
     <li><a href="#"><img src="../assets/images/Header/shoppingBag.png" alt="bag">3 items</a></li>
     <li><a href="#"><img src="../assets/images/Header/glass.png" alt="glass"></a></li>
     <li><div class="zap-slideout-opener" @click="toggle"><img src="../assets/images/Header/burgerMenu.png" alt="burger"></div></li>
   </ul>
  </div>
</div>
<div class="zap-slideout"
       :class="{ isOpen: isOpen }">
    <ul class="zap-slideout-menu">
      <li class="zap-slideout-menu-item">
      </li>
      <li class="zap-slideout-menu-item"
        v-for="item in menu">
        <router-link :to="item.link">
        {{item.title}}
      </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data: () => ({
    openerText: 'Open',
    isOpen: false,
    menu: [
      {title: 'Home', link: '/'},
      {title: 'Collection', link: '/collection/'},
      {title: 'Contact', link: '/contact/'}
      ],
    imgAssets: '../assets/images/Header/'
  }),
  watch: {
    '$route' (to, from){
      this.close()
    }
  },
  methods: {
    open() {
      this.openerText = 'Close';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'Open';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
}
</script>

<style lang="scss">
.zap-slideout {
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 30px;
  background-color: #34495e;
  opacity: 0;
  transition: opacity 0.6s ease-out;
  z-index: -99999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
  &.isOpen {
     opacity: 1;
     z-index: 999;
  }
}

.zap-slideout-opener {
  cursor: pointer;
  z-index: 99999;
  &:hover {
    text-decoration: underline;
  }
}

.zap-slideout-menu {
  font-weight: 600;
  color: #fff;
}

.zap-slideout-menu-item,
.zap-slideout-menu-item--small {
  cursor: pointer;
  list-style: none;
  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 20px;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
}

.zap-slideout-menu-item {
  font-size: 36px;

  & + .zap-slideout-menu-item--small {
    margin-top: 30px;
  }
}

.mainHeader{
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 9fr 3fr;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  z-index: 9999;
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li{
      list-style: none;
      a{
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
        img{
          margin-right: 10px;
          vertical-align: sub;
        }
      }
    }
  }
  .logoContainer{
    display: flex;
    align-self: center;
  }
}
</style>
