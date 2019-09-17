<template>
  <div class="container">
    <h2>Vue Test by SUN</h2>

    <p>Github Repo : <a target="_blank" href="https://github.com/SunKim/vue-test-component">https://github.com/SunKim/vue-test-component</a></p>
    <ul>
      <li>
        <a href="/#/directives">Basic Directives</a>
      </li>
      <li>
        <a href="/#/test">Component Test - Simplest</a>
      </li>
      <li>
        <a href="/#/test2">Component Test2 - Todo, axios, .Sync</a>
      </li>
      <li>
        <a href="/#/test3">Component Test3 - slot, Async Components</a>
      </li>
      <li>
        <a href="/#/test4">Component Test4 - Async Components (Dynamic Import)</a>
      </li>
      <li>
        <a href="/#/test5">Component Test5 - $root, $parent, $ref</a>
      </li>
      <li>
        <a href="/#/TransitionTest">Transition test</a>
      </li>
      <li>
        <a href="/#/MixinTest">Mixin test, Custom Directive</a>
      </li>
      <li>
        <a href="/#/VuexTest">Vuex test (state, getters, mutations, acitons)</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
