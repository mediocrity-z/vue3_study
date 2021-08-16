<template>
    <h3>n1:{{n1}}</h3>
    <h3>n2:{{n2}}</h3>
    <h3>n3:{{n3}}</h3>
    <h3>n4:{{n4}}</h3>
    <br>
    <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, shallowReactive, shallowRef ,ref} from 'vue'

export default defineComponent({
    setup() {
        // reactive:深度劫持,深度响应式
        const n1=reactive({
            name:'何超',
            age:20,
            son:{
                name:'欧力',
                habit:'开黑'
            }
        })
        // shallowreactive浅劫持,只能劫持最外面一层的属性,同时操作最外面一层的属性和深层次的属性也可一起劫持
        const n2=shallowReactive({
            name:'何超',
            age:20,
            son:{
                name:'欧力',
                habit:'开黑'
            }
        })
        // ref:深度劫持,深度响应式,做了reactive的处理
        const n3=ref({
            name:'何超',
            age:20,
            son:{
                name:'欧力',
                habit:'开黑'
            }
        })
        // shallowref浅劫持,只劫持最外面一层的属性
        const n4=shallowRef({
            name:'何超',
            age:20,
            son:{
                name:'欧力',
                habit:'开黑'
            }
        })
        const update=()=>{
        // 更改n1 reactive方式
        // n1.son.habit='gj'
        // 更改n2 shallowreactive方式
        // n2.age=18
        // n2.son.habit='gj'
        // 更改n3 ref方式
        //   n3.value.age=18
        // n3.value.son.habit='gj'
        // 更改n4 shallowref方式
        }
        return{
            n1,n2,n3,n4,update
        }
    },
})
</script>
