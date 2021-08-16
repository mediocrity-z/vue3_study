<template>
    <h1>{{user.name}}今年{{user.age}}岁了</h1>
    <h1>{{user.name}}有个可爱的儿子名字叫{{user.son.name}}</h1>
    <h1>{{user.name}}的王者水平是{{user.stand}}</h1>
    <button @click="get" id="but">欧力打了一晚上五排</button>
    <h1>{{user.sex}}</h1>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
// reactive和ref的对比:
// ref用于处理基础类型的数据，reactive用于处理对象(递归深度响应式)
// ref函数也可以传入对象，内部会自动将其转化为reactive的代理对象
// ref内部通过给value属性添加setter和getter来实现对数据的劫持
// reactive内部通过使用proxy实现对对象内部的所有数据的劫持，并通过Reflect操作对象内部数据

    setup() {
        // reactive函数的作用：定义多个数据的响应式
        // reactive()接收一个普通对象，返回该普通对象的响应式代理器对象
        // 响应式转换会影响对象内部嵌套的所有属性;基于es6的proxy，通过代理对象操作源对象内部数据都是响应式的
        const obj:any={
          name:'欧力',
          age:20,
          son:{
              name:'何超',
              age:1
          },
          stand:'星耀'
        }

        const user=reactive(obj)

        // 不能直接使用目标对象来更新它的属性值，只能使用它的代理对象user来更新数据
        function get(){
        user.stand='王者'
        
        };
       
        // 给对象新增属性的情况，给目标对象和代理对象添加属性都会生效
        obj.sex='男'
        
        return{
            user,
            get
        }
    },
})
</script>
<style lang="less" scoped>
#but{
    display: block;
    margin: 0 auto
}
</style>