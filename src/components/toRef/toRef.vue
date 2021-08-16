<template>
    {{person}}
    <br>
    {{name1}}
    <br>
    {{name2}}
    <br>
    <button @click="update">更新数据</button>
    <br>
    <child :name2="name2"></child>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import child from './child.vue'
export default defineComponent({
    components:{
        child
    },
    setup() {
        const person=reactive({
            name:'欧力',
            age:20,
            son:{
                name:'何超',
                age:20
            }
        })
        // 用ref将reactive对象中的某个属性包装成ref对象,操作该对象的值,原reactive中的属性值不变
        const name1=ref(person.name)
        // 将reactive对象中的属性变为ref对象,相当于单独把该属性提取出来,操作该对象的值,原reactive对象中的属性值改变,互相影响
        const name2=toRef(person,'name')
        const update=function(){
            // name1.value='大脑'
            name2.value='大脑袋'
        }
        return{
            person,name1,name2,update
        }
    },
})
</script>
