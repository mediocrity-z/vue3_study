<template>
    <h6>这个是child子组件</h6>
    <br>
    <h3>{{msg}}</h3>
    <button @click="a">修改value值</button>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onMounted ,onBeforeUnmount,onUnmounted,onBeforeUpdate,onUpdated,ref} from 'vue'

export default defineComponent({
    // 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。
    // 换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。
    
    setup() {
        console.log('组件实例创建之前');
        console.log('组件实例创建之后');
        
        let msg=ref('欧力')
        const a=function(){
          msg.value='何超';
          
        }
        onBeforeMount(()=>{
            console.log('触发了beforeMount钩子函数');
        })
        onMounted(()=>{
            console.log('触发了Mounted钩子函数');
        })
        onBeforeUpdate(()=>{
            console.log('触发了onBeforeUpdate钩子函数');
            
        })
        onUpdated(()=>{
            console.log('触发了onUpdated钩子函数');
            
        })
        onBeforeUnmount(()=>{
         console.log('触发了onBeforeUnmount钩子函数');
        })
        onUnmounted(()=>{
            console.log('触发了onUnmounted钩子函数');
            
        })
        return{
            a,msg
        }
    },
})
</script>
