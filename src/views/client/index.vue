<template>
  <div class="poppy-client">
    <div class="poppy-client-main">
      <header>
        <div class="header-wrapper">
          <div class="header-logo"></div>
          <nav class="header-nav"></nav>
          <!-- <div class="header-more"></div> -->
        </div>
      </header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  @import './../../styles/conf';

  .poppy-client {
    height: 100%;
    padding: 80px 0;
    background-color: #bfefff;
    &-main {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      border-radius: 10px;
      background-color: $white;
      box-shadow: 2px 2px 5px rgba(165, 229, 255, .8), -2px -2px 5px rgba(165, 229, 255, .8);
      header {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid $borderColor;
      }
      .header-wrapper {
        display: flex;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
      }
      .header-logo,
      .header-more {
        width: 100px;
      }
      .header-nav {
        flex: 1;
      }
    }
  }
</style>

