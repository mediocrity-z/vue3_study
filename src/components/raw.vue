<template>
    <h1>toRaw markRaw</h1>
    <h3>{{person}}</h3>
    <button @click="test">测试</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
// toRaw :返回由reactive或readonly修饰的代理对象的普通对象
// markRaw:标记一个对象,使其永远不会转化为代理对象,返回对象本身
export default defineComponent({
    setup() {
        const person=reactive({
            name:'欧力',
            habit:'开黑'
        })
           const test=function(){
            //    把代理对象转化为原普通对象,数据变化后视图不变
            const user=toRaw(person);
            user.name='何超';
            console.log('测试');
            // user的name变化了
            console.log(user);
            
           }
        return{
            person,test
        }
    },
})
</script>
