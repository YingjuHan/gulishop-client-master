<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="msg">
    <span>{{ msg }}</span>
    <br>

    <hr/>
    <!-- 下面的msg属于props，用于父子组件通信 -->
    <!-- @input不是原生DOM的input事件，属于自定义事件 -->
    <!-- <CustomInput :value="msg" @input="msg = $event"></CustomInput> -->
    <!-- 简化写法 -->
    <CustomInput v-model="msg"></CustomInput>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    components: {
      CustomInput
    },
    data() {
      return {
        msg: '我爱你'
      }
    }
  }
</script>
