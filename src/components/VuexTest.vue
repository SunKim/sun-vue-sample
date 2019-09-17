<template>
  <div>
      <p class="desc">computed를 통한 direct access</p>
      <p> {{localCount}} </p>

      <p class="desc">getter를 통한 access. store에 getter를 등록해놓고 모든 Component가 사용</p>
      <p>만약 state를 복잡하게 계산해야 하는 상황일때 getter가 없다면 모든 compo에서 계산로직 코딩 필요 (filter한다고 생각해봐라 ㅋㅋ)</p>
      <p> {{countFromGetter}} </p>

      <p class="desc">...mapGetters를 통한 getter 사용 (... : object spread operator)</p>
      <p> {{ this.getCount }}</p>

      <div class="mt40">
          <p class="desc">mutation commit을 이용한 값 변경 (this.$store.commit)</p>
          <div>
              <button class="btn btn-info btn-sm" @click="plusCount">Plus</button>
              <button class="btn btn-info btn-sm ml10" @click="plusCountPayload(10)">Plus + (payload)</button>
              <button class="btn btn-danger btn-sm ml10" @click="minusCount">Minus</button>
              <button class="btn btn-danger btn-sm ml10" @click="minusCountPayload(10)">Minus + (payload)</button>
          </div>
          <div class="mt20">
              <button class="btn btn-info btn-sm" @click="setEmpInfo({jobTitle: 'CTO', sallary: 200000})">Object 변경(console확인)</button>
          </div>
      </div>

      <div class="mt40">
          <p class="desc">action dispatch를 이용한 값 변경 (this.$store.dispatch)</p>
          <p>async를 위해 setTimeout(,1000) 사용</p>
          <button class="btn btn-info btn-sm" @click="plusCountAction">Plus</button>
          <button class="btn btn-info btn-sm ml10" @click="plusCountActionPayload(10)">Plus + (payload)</button>
      </div>

      <div class="mt40">
        <p>코드들</p>
        <p>
          mapState, mapMutation, mapGetters, mapActions<br />
          Compo에서 state는 보통 getter를 통해 가져오므로 mapGetters 사용. mapState 안씀<br />
          Compo에서 mutation, action은 this.$store.commit / dispatch를 사용하므로 mapMutations, mapActions도 잘 안씀<br />
        </p>
        <p></p>
        <p>mutation(동기처리) vs action(비동기처리). 여러 compo에서 동기/비동기로 막 처리하면 변경순서 추적 불가</p>
        <p>코딩패턴 1. 동기는 mu, 비동기는 act</p>
        <p>코딩패턴 2. 모두 act에서 dispatch</p>
        <p>state와 context 차이?</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VuexTest',
  computed: {
    ...mapGetters([
      'getCount',
      'getEmpInfo'
    ]),
    localCount: function() {
      return this.$store.state.count
    },
    countFromGetter: function() {
      return this.$store.getters.getCount
    }
  },
  methods: {
    // mutation을 이용한 state 변경
    plusCount: function () {
      this.$store.commit('plusCount')
      console.log(this.$store)
    },
    plusCountPayload: function (payload) {
      this.$store.commit('plusCountPayload', payload)
    },
    minusCount: function () {
      this.$store.commit('minusCount')
    },
    minusCountPayload: function (payload) {
      this.$store.commit('minusCountPayload', payload)
    },
    setEmpInfo: function (payload) {
      console.log('=== 변경전 empInfo')
      console.log(this.getEmpInfo)
      this.$store.commit('setEmpInfo', payload)
      console.log('=== 변경후 empInfo')
      console.log(this.getEmpInfo)
    },

    // action을 이용한 state 변경
    plusCountAction: function () {
      this.$store.dispatch('plusCount');
    },
    plusCountActionPayload: function (payload) {
      this.$store.dispatch('plusCountPayload', payload);
    },
  }
}
</script>
