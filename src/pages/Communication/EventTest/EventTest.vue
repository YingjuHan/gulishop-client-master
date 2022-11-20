<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生DOM绑定系统事件 -->
    <button @click="handler">原生DOM绑定原生事件</button>

    <!-- Event1组件：非原生DOM节点，而绑定的click事件并非原生DOM事件，而是自定义事件
      @click.native可以将自定义事件转变为原生DOM事件
      当前原生DOM的click事件，其实是给子组件的根节点绑定了点击事件---利用到了事件委派
    -->
    <Event1 @click.native="handler1"/>
    
    <!-- 原生DOM绑定自定义事件没有任何意义，因为没有办法触发$emit函数 -->
    <button @xxx="handler2">原生DOM绑定自定义事件</button>

    <Event2 @click="handler3" @xxx="handler4"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
      handler() {
        console.log("原生DOM绑定原生事件");
      },
      handler1() {
        console.log("Event1的事件回调");
      },
      handler2() {
        console.log("原生DOM绑定自定义事件");
      },
      handler3() {
        console.log("Event2自定义事件click");
      },
      handler4() {
        console.log("Event2自定义事件xxx");
      },
    }
  }
</script>
