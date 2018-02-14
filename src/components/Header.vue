<template lang="html">
  <nav>
<div class="mainHeader">
 <div class="logoContainer">

 </div>
 <div class="mainMenu">
   <ul>
     <li>Login</li>
     <li>Cart</li>
     <li>Search</li>
     <li><div class="zap-slideout-opener" @click="toggle">{{openerText}}</div></li>
   </ul>
  </div>
</div>
<div class="zap-slideout"
       :class="{ isOpen: isOpen }">
    <ul class="zap-slideout-menu">
      <li class="zap-slideout-menu-item">
        <img class="zap-emoji" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/19332/zap-emoji.svg" alt="Zap Emoji" />
      </li>
      <li class="zap-slideout-menu-item"
        v-for="item in menu">{{item}}</li>
      <li class="zap-slideout-menu-item--small"
        v-for="item in smallMenu">{{item}}</li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data: () => ({
    openerText: 'Open',
    isOpen: false,
    menu: [ 'Home', 'Work', 'Contact' ],
    smallMenu: [ 'Tips', 'Resources', 'Shenanigans' ]
  }),
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
  position: absolute;
  width: 240px;
  height: 100vh;
  padding: 30px;
  background-color: #34495e;
  opacity: 0;
  transition: opacity 0.6s ease-out;

  &.isOpen {
     opacity: 1;
  }
}

.zap-slideout-opener {
  color: black;
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

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 20px;
  }
}

.zap-slideout-menu-item {
  font-size: 36px;

  & + .zap-slideout-menu-item--small {
    margin-top: 30px;
  }
}

.zap-slideout-menu-item--small {
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ecf0f1;
}

.mainHeader{
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 9fr 3fr;
  max-width: 1375px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  z-index: 9999;
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li{
      list-style: none;
    }
  }
}
</style>
