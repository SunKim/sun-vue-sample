<template>
  <div class="container">
      <div>
        <button class="btn btn-info btn-sm" @click="isShow1 = !isShow1">Toggle</button>
        <transition name="fade">
          <p v-show="isShow1">Transition - Fade effect</p>
        </transition>
      </div>

      <div>
        <button class="btn btn-info btn-sm" @click="isShow2 = !isShow2">Toggle</button>
        <transition name="slide-fade">
          <p v-show="isShow2">Transition - slide fade effect</p>
        </transition>
      </div>

      <div>
        <button class="btn btn-info btn-sm" @click="isShow3 = !isShow3">Toggle</button>
        <transition name="flip">
          <p v-show="isShow3">Transition - flip effect</p>
        </transition>
      </div>

      <div>
        <button class="btn btn-info btn-sm" @click="isShow4 = !isShow4">Toggle</button>
        <transition name="bounce">
          <p v-show="isShow4">Animation - bounce effect</p>
        </transition>
      </div>

      <div>
        <p class="desc">외부 라이브러리(Animate.css) 사용 예</p>
        <button class="btn btn-info btn-sm" @click="isShow5 = !isShow5">Toggle</button>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
        >
          <p v-show="isShow5">
            Animation.css 사용.<br />
            &lt;style&gt;에서 @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
          </p>
        </transition>
      </div>

      <div>
        <p class="desc">Javascript Hook - 외부 라이브러리(velocity.js) 사용 예<br />

        </p>
        <button class="btn btn-info btn-sm" @click="isShow6 = !isShow6">Toggle</button>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          v-bind:css="false"
        >
          <p v-show="isShow6">
            npm install velocity-animate --save 설치<br />
            import velocity from 'velocity-animate'로 import
          </p>
        </transition>
      </div>

      <div>
        <p class="desc">Image Flip animation sample </p>
        <main>
          <img-transition>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo2.jpg" />
            </span>
          </img-transition>
          <img-transition>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo13.jpg" />
            </span>
          </img-transition>
          <img-transition>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg" />
            </span>
          </img-transition>
          <img-transition>
            <span>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo5.jpg" />
            </span>
          </img-transition>
        </main>
      </div>

      <div>
        <p class="desc">Dynamic Component의 transition</p>
        <button class="btn btn-info btn-sm" @click="toggleCompo">Toggle Compo</button>
        <transition name="component-fade" mode="out-in">
          <component v-bind:is="compo"></component>
        </transition>
      </div>

      <div>
        <p class="desc">List의 enter/leave transition</p>
        <button class="btn btn-info btn-sm" v-on:click="addItem">Add</button>
        <button class="btn btn-info btn-sm" v-on:click="removeItem">Remove</button>
        <transition-group name="list" tag="p">
          <span v-for="item in items" v-bind:key="item" class="list-item"> {{ item }} </span>
        </transition-group>
      </div>

      <div>
        <p class="desc">List의 move transition</p>
        <button class="btn btn-info btn-sm" v-on:click="shuffleItem">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
          <li v-for="item in items" v-bind:key="item">{{ item }}</li>
        </transition-group>
      </div>

      <div>
        <p class="desc">Transition group example</p>
        <p>https://jsfiddle.net/chrisvfritz/sLrhk1bc/</p>
        <button @click="shuffleSudoku">
          Shuffle
        </button>
        <transition-group name="cell" tag="div" class="sudoku-container">
          <div v-for="cell in cells" :key="cell.id" class="cell">
            {{ cell.number }}
          </div>
        </transition-group>
      </div>

      <div>
        <p class="desc">재사용 가능한 Transition Component</p>
        <div>
          <button class="btn btn-info btn-sm" v-on:click="isShow7 = !isShow7">Toggle1</button>
          <button class="btn btn-info btn-sm ml20" v-on:click="isShow8 = !isShow8">Toggle2</button>
        </div>
        <fade-transition>
          <div v-if="isShow7" class="box mr20"></div>
        </fade-transition>
        <fade-transition>
          <span v-if="isShow8" style="display:inline-block;">hi. 옆의 네모와 같은 <code>&lt;fade-transition&gt;</code> 사용</span>
        </fade-transition>
      </div>
  </div>
</template>

<script>
import ImgTransition from './Test/ImgTransition.vue'
import Velocity from 'velocity-animate'
import _ from 'lodash'
import FadeTransition from './Transition/FadeTransition.vue'

export default {
  name: 'TransitionTest',
  data () {
    return {
      isShow1: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
      isShow5: true,
      isShow6: true,
      isShow7: true,
      isShow8: true,
      compo: 'compo-a',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      cells: Array.apply(null, { length: 81 })
        .map(function (_, index) {
          return {
            id: index,
            number: index % 9 + 1
          }
        })
    }
  },
  components: {
    ImgTransition,
    'compo-a': {
      template: '<div style="background:orange;">Component A</div>'
    },
    'compo-b': {
      template: '<div style="background:purple;color:white;">Component B</div>'
    },
    FadeTransition
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em', translateX: '0px', translateY: '0px', rotateZ: '0deg' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, { rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0 }, { complete: done })
    },
    toggleCompo: function () {
      this.compo === 'compo-a' ? this.compo = 'compo-b' : this.compo = 'compo-a'
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    addItem: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    removeItem: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffleItem: function () {
      this.items = _.shuffle(this.items)
    },
    shuffleSudoku: function () {
      this.cells = _.shuffle(this.cells)
    }
  }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.container div { min-height:70px; }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: transform 1s;
}

.sudoku-container {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  min-height: 25px !important;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  background-color: rgb(108, 141, 213);
  box-shadow: rgba(108, 141, 213, 0.5) 0px 6px 20px;
  border-radius: 10px;
}
</style>
