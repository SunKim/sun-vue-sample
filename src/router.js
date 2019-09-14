import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import BasicDirectives from '@/components/BasicDirectives'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'

// async component를 dynamic import하므로 여기서 static하게 import할 필요 없음
// import Test4 from '@/components/Test4'
// import Test5 from '@/components/Test5'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/directives',
      name: 'BasicDirectives',
      component: BasicDirectives
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/test4',
      name: 'Test4',
      component: () => import('@/components/Test4.vue').then(console.log('Test4.vue(Async Component) is dynamically loaded - from Router'))
    },
    {
      path: '/test5',
      name: 'Test5',
      component: () => import('@/components/Test5.vue').then(console.log('Test5.vue(Async Component) is dynamically loaded - from Router'))
    },
    {
      path: '/TransitionTest',
      name: 'TransitionTest',
      component: () => import('@/components/TransitionTest.vue').then(console.log('TransitionTest.vue(Async Component) is dynamically loaded - from Router'))
    },
    {
      path: '/MixinTest',
      name: 'MixinTest',
      component: () => import('@/components/MixinTest.vue').then(console.log('MixinTest.vue(Async Component) is dynamically loaded - from Router'))
    }
  ]
})
