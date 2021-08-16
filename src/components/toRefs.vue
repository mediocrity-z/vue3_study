<template>
   <h1>{{name}}</h1> 
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
// toRefs的作用:把一个响应式对象转换为普通对象，该普通对象的每个属性都是ref对象
// 利用toRefs可以将一个reactive响应式对象总的所有属性转化为响应式的ref对象
export default defineComponent({
    setup() {
        const person=reactive({
            name:'欧力',
            age:20,
            sex:'男'
        })
        
         setInterval(()=>{
             name.value+='=='
         },2000)
         const {name,age,sex}=toRefs(person)
         
         
        return{
            name,age,sex
        }
    },
})
</script>
