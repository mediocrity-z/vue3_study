<template>
    <h3>{{person}}</h3>
    <br>
    <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
// readonly:深度只读,不可修改,对代理对象的只读代理
// shallowReadonly:浅只读,外面的一层属性不可修改,深层次的属性可以修改
export default defineComponent({
    setup() {
        const person=reactive({
            name:'欧力',
            age:20,
            son:{
                name:'何超',
                age:20
            }
        })
        const state=shallowReadonly(person)
        const update=function(){
        // state.age=18 报错
        // state.son.age=18 报错

        //  state.age=18 报错
        state.son.age=18
        }
        return{
          person,state,update
        }
    },
})
</script>
