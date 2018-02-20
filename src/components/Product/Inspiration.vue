<template lang="html">
  <div class="outerContainer">
    <div class="innerInspiration">
      <div class="inspirationImage img1">

      </div>
      <div class="inspirationInformation grayInfo">
        <h2>Extraordinary Design</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        <div class="inspirationIcons">
          <div class="iconContainer">
            <div>
              <img src="/static/images/product/ElegantStylegGlasses.png">
              </div>
              <span>Elegant Style</span>
          </div>
          <div class="iconContainer">
            <div>
              <img src="/static/images/product/ElegantStyleHanger.png">
              </div>
            <span>Elegant Style</span>
          </div>
          <div class="iconContainer">
            <div>
              <img src="/static/images/product/ElegantStyleButterfly.png">
              </div>
            <span>Elegant Style</span>
          </div>
        </div>
        <button>Read more</button>
      </div>
      <div class="inspirationInformation blueInfo">
        <h2>Extraordinary Design</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        <div class="inspirationIcons">
          <div class="iconContainer">
            <div>
              <img src="/static/images/product/ElegantStylegGlasses.png">
              </div>
              <span>Elegant Style</span>
          </div>
          <div class="iconContainer">
            <div>
              <img src="/static/images/product/ElegantStyleHanger.png">
              </div>
            <span>Elegant Style</span>
          </div>
          <div class="iconContainer">
            <div>
              <img src="/static/images/product/ElegantStyleButterfly.png">
              </div>
            <span>Elegant Style</span>
          </div>
        </div>
        <button>Read more</button>
      </div>
      <div class="inspirationImage img2">
      </div>

    </div>
  </div>
</template>

<script>
export default {
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
.innerInspiration{
  display: grid;
  grid-template-columns: 6fr 6fr;
  width: 100%;
  grid-auto-rows: 1fr;
  .inspirationImage{
    background-size: cover;
    height: 600px;
  }
  .img1{
    background-image: url(/static/images/product/AdeliaDressCut1.jpg);
  }
    .img2{
      background-image: url(/static/images/product/AdeliaDressCut2.jpg);
    }
  .inspirationInformation{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10% 15%;
    color: #fff;
    text-align: left;

    h2{
      font-weight: 300;
      font-size: 32px;
    }
    p{
      font-size: 14px;
      line-height: 30px;
    }
    .inspirationIcons{
      display: flex;
      width: 80%;
      justify-content: space-between;
      margin-bottom: 30px;
      .iconContainer{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 12px;
        color: #ebebeb;
        div{
          border: 2px solid #858585;
          border-radius: 50%;
          width: 75px;
          height: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    button{
      width: 50%;
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      line-height: 30px;
      text-transform: uppercase;
      @include transition(.5s);
    }
  }
  .grayInfo{
    background-color: #333;
    p{
      color: #a4a4a4;
    }
    button{
      &:hover{
        background-color: #33d0de;
        cursor: pointer;
      }
    }
  }
  .blueInfo{
    background-color: #33d0de;
    p{
      color: #fff;
    }
    .iconContainer{
      div{
        border: 2px solid #fff !important;
      }
    }
    button{
      &:hover{
        background-color: #333;
        cursor: pointer;
      }
    }
  }
}
</style>
