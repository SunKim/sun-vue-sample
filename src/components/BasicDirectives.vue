<template>
  <div class="container">
    <p class="desc">v-cloak : instance가 init되기 전 화면에서 숨김</p>
    <p>
      <code>&lt;div id="app" v-cloak&gt;</code> 처럼 사용.<br />
      vue init 전 javascript 미작동이라 isVisible등이 효과없어서 그대로 보여짐.<br />
      css에 [v-cloak] { display: none; } 추가 필요.
    </p>

    <p class="desc">v-once : 최초 한번만 render. 정적 contents</p>
    <p v-once v-text="staticHtml"></p>

    <p class="desc">v-text : text만 render. XSS 차단</p>
    <p v-text="someText"></p>

    <p class="desc">v-html : html render</p>
    <p v-html="someHtml"></p>

    <p class="desc">v-show : render 할지 안할지 여부</p>
    <p v-show="isVisible">이 문장은 this.isVisible data가 true면 보입니다.</p>

    <p class="desc">v-if : 조건에 따른 render</p>
    <p v-if="isVisible">이 문장은 this.isVisible data가 true면 보입니다.</p>
    <p v-else style="color:purple;">이 문장은 this.isVisible data가 false면 보입니다.</p>

    <p class="desc">v-pre : &lt;pre&gt; 태그처럼 그대로 보여줌</p>
    <p v-pre>{{mustache도_그대로_보여줌}}</p>

    <p class="desc">v-bind : HTML의 attribute(속성)에 vue의 data 이용시. (축약표시 :)</p>
    <img v-bind:src="imgSrc"/>
    <button class="btn btn-primary" v-bind:disabled="isButtonDisabled">Button</button>

    <p class="desc">v-for : array/object에 대한 반복수행</p>
    <ul v-if="someArray.length">
      <li v-for="someItem in someArray" v-bind:key="someItem.id">
        <p>
          <span v-text="someItem.id"></span>
          <span v-text="someItem.text"></span>
        </p>
      </li>
    </ul>
    <p v-else>Nothing in the Array</p>

    <p class="desc">v-on : event handling (축약표시 @)</p>
    <p v-text="counter"></p>
    <button v-on:click="decreseCounter">감소</button>
    <button @click="counter = counter + 1">증가</button>

    <p class="desc">v-model : 양방향 data binding. form태그만 적용가능.</p>
    <p><code>&lt;input v-model="”searchText"&gt;</code> 는 내부적으로는 <code>&lt;input v-bind:value=”searchText” v-on:input=”searchText = $event.target.value”&gt;</code>와 동일</p>
    <input v-model="someInput" />

    <h4 class="title">v-model 샘플</h4>
    <div class="v-model-sample form-group">
      <p>Textarea</p>
      <div style="white-space: pre-line">{{ message }}</div>
      <textarea v-model="message" placeholder="여러줄을 입력해보세요"></textarea>

      <p>Checkbox</p>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>체크한 이름: {{ checkedNames }}</span>

      <p>Radio</p>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>선택: {{ picked }}</span>

      <p>Select</p>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>선택함: {{ selected }}</span>

      <p>Multiple Select</p>
      <select v-model="multipleSelected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ multipleSelected }}</span>

      <p>Dynamic Rendering Select</p>
      <select v-model="dynamicSelected">
        <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ dynamicSelected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicDirectives',
  data () {
    return {
      staticHtml: 'Hi, this is static. it does not needed to be re-rendered',
      someText: 'some text...',
      someHtml: '<b><i><u>some html...</u></i></b>',
      isVisible: true,
      toggleVisibleIntv: '',
      imgSrc: 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png',
      isButtonDisabled: true,
      someArray: [
        {id: 1, text: 'hello world'},
        {id: 2, text: 'hi there'},
        {id: 3, text: 'greetings from sun'}
      ],
      someInput: 'input init value',
      counter: 0,

      message: '여러줄용',
      checkedNames: [],
      picked: 'One',
      selected: 'A',
      multipleSelected: [],
      dynamicSelected: '',
      options: [
        {value: 'A01', text: '코드A01명'},
        {value: 'B01', text: '코드B01명'},
        {value: 'C01', text: '코드C01명'},
        {value: 'D01', text: '코드D01명'}
      ]
    }
  },
  methods: {
    toggleVisible: function () {
      this.toggleVisibleIntv = setInterval(function () {
        this.isVisible = !this.isVisible
      }.bind(this), 1000)
    },
    decreseCounter: function () {
      this.counter = this.counter - 1
    }
  },
  mounted: function () {
    this.staticHtml = 'staticHtml has been changed. but this message won\'t be rendered'
    // this.toggleVisible()
    this.someArray.push({id: 4, text: 'this item : created after mounted'})
  },
  beforeDestroy () {
    clearInterval(this.toggleVisibleIntv)
  }
}</script>

<style coped>
.title { margin-top: 20px; color: purple; }
.v-model-sample { border: 1px solid #ddd; border-radius: 4px; padding:10px; }
.v-model-sample p { margin-top: 20px; font-weight: bolder; color: #17a2b8 !important; }
.v-model-sample select { min-width: 200px; }
</style>
