<template>
    <p>{{count}}</p>
<button @click="update">点击加一</button>
<br>
<setup-son :msg="msg" msg1="何超" @eclick="add($event)"></setup-son>
<br>
<br>
<input type="text" ref='inputRef'>
</template>
<script lang="ts">
import { defineComponent ,onMounted,ref} from 'vue'
import setupSon from './setupSon.vue'
export default defineComponent({
  components:{
    setupSon
  },

    // vue3
    // 1.setup函数会在beforecreate函数之前即组件创建之前调用，并且只执行一次
    // 由此可见setup函数无法使用实例对象中的this
    // 不能通过this访问data，computed，methods等，所有的组合api相关回调函数中也不可以
    beforeCreate(){
      console.log('beforecreate执行了');
      
    },

  // 2.setup是组合api的入口函数
  setup(){

    // 3.ref函数的作用是定义一个响应式的数据，返回的是一个ref对象
    // 在script中操作数据需要.value,但是在模板中渲染时不需要加.value
    let count=ref(0)
    let update=function():void{
      count.value++
    }
    console.log('setup函数执行了');
    const msg=ref('马哥最帅')
    let add=function(val:any):any{
     count.value+=val
    }

    // 4.ref可以获取页面中的元素
     const inputRef=ref<HTMLElement|null>(null);
     onMounted(()=>{
      //  页面加载完成,value不为空
      inputRef.value&&inputRef.value.focus()
     })
    
    // 5.setup返回一个对象，其内部的属性可以和data中返回对象的属性合并使用
    // 返回对象中的方法也可以和methods中的方法合并使用
    // 如果有重名，setup中的优先
    // 一般不会混合使用，methods可以访问setup的属性方法，但是setup访问不到data和methods
    // setup函数不能用async修饰，如果用了async，setup中的返回值是一个promise而不是对象了，就不能在模板中使用了
    return{
     count,
     update,
     add,
     msg,
     inputRef
    }
  }
})
</script>
