<template lang="html">
  <nav>
    <div class="headerContainer" v-bind:class="{ frontPage: isFront}">
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
</div>
</nav>
</template>

<script>
export default {
  data: () => ({
    openerText: 'Open',
    isOpen: false,
    isFront: true,
    menu: [
      {title: 'Home', link: '/'},
      {title: 'Collection', link: '/collection/'},
      {title: 'Contact', link: '/contact/'}
      ],
    imgAssets: '../assets/images/Header/'
  }),
  watch: {
    '$route' (to, from){
      this.close(),
      this.isFrontPage()
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
    },
    isFrontPage(){
      if (this.$route.path === "/"){
        this.isFront = true;
      }
      else {
        this.isFront = false;
      }
      console.log(this.$route.path);
      console.log(this.isFront);
    }
  }
}
</script>

<style lang="scss">
$phoneQuery: "only screen and (max-width : 780px)";
.zap-slideout {
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 30px;
  background-color: #33d0de;
  opacity: 0;
  transition: opacity 0.6s ease-out;
  z-index: -99999;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
  &.isOpen {
    display: flex;
     opacity: 1;
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
  padding: 0;
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
.headerContainer{
      width: 100%;
      height: 55px;
      position: fixed;
          z-index: 9999;
          background-color: #333;

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
    ul{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li{
        @media #{$phoneQuery}{
          &:nth-child(1),&:nth-child(2),&:nth-child(3){
            display: none;
          }
        }
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
      @media #{$phoneQuery}{
        padding-left: 10px;
      }
    }
  }
}
.frontPage{
  background-color: transparent !important;
}
</style>
