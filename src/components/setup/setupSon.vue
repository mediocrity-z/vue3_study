<template>
  <h1>{{ msg }}</h1>
  <button @click="emi">点击加10</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, context) {
    //   也可写作setup(props,{attrs,emit,slots})
    // props参数是一个对象，里面有父组件向子组件传递的数据，并且是在子组件中使用props接受到的所有的属性
    console.log(props);
    // context参数是一个对象，包含
    // attrs对象:获取当前组件标签上所有的未在props中声明的属性的集合的对象，相当于this.$attrs
    // emit方法:分发自定义事件的函数，相当于this.$emit
    // slots对象：所有传入的插槽内容的对象，相当于this.$slots
    console.log(context.attrs.msg1);
    const emi=function(){
     context.emit('eclick',10)
    }
    return {emi};
  },
  props: ["msg"]
});
</script>
