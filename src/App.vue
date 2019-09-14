<template>
  <div id="app" v-cloak>
    <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">

    <img class="img-btn" src="./assets/logo.png" title="Home" v-on:click="goHome">
    <h4 style="display:inline-block;">Vue Test By Sun</h4>

    <ul class="navigation">
      <li><router-link v-bind:to="{ name: 'Home' }">Home</router-link></li>
      <!--
      <li><router-link v-bind:to="{ name: 'HelloWorld' }">Hello World</router-link></li>
      -->
      <li><router-link v-bind:to="{ name: 'BasicDirectives' }">Basic Directives</router-link></li>
      <li><router-link v-bind:to="{ name: 'Test' }">Test1</router-link></li>
      <li><router-link v-bind:to="{ name: 'Test2' }">Test2</router-link></li>
      <li><router-link v-bind:to="{ name: 'Test3' }">Test3</router-link></li>
      <li><router-link v-bind:to="{ name: 'Test4' }">Test4</router-link></li>
      <li><router-link v-bind:to="{ name: 'Test5' }">Test5</router-link></li>
      <li><router-link v-bind:to="{ name: 'TransitionTest' }">TransitionTest</router-link></li>
      <li><router-link v-bind:to="{ name: 'MixinTest' }">MixinTest</router-link></li>
    </ul>

    <hr />

    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>

<script>
export default {
  name: 'App',
  methods: {
    goHome: function () {
      location.href = '/'
    }
  }
}
</script>

<style src="@/assets/css/sun.common.css"></style>

<style>
[v-cloak] { display:none; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 200px;
}
h1 { margin:20px auto; }
li { list-style: none; }

.img-btn { cursor:pointer;width:40px; }
.screen-container { width:100%;text-align:center; }

p.desc { color:#2b7823; margin-top:18px;margin-bottom:0px; }
p.desc::before { content:'#' }
ul.navigation {  }
ul.navigation li { display: inline-block; }
ul.navigation li::after { content: "|" }
ul.navigation li:last-child::after { content: "" }
ul.navigation li a { color: #1a4384;margin:0 6px; }

.router-link-exact-active { color: #f4a742 !important; }
</style>

<style scoped>
/* transition 관련 */
/*
.page-enter-active, .page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
*/
.page-enter-active, .page-leave-active {
  transition: opacity 0.15s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
