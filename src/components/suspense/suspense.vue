<template>
<h1>父组件</h1>
<Suspense>
    <template #default>
        <!-- 异步组件 -->
        <child></child>
        </template>
    <template v-slot:fallback><h1>loading...</h1></template>
</Suspense>
</template> 
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
// 动态引入异步组件
const child=defineAsyncComponent(()=>{
    return import('./child.vue')
})
// suspense:不确定的,让应用在等待异步组件时渲染一些后备内容
export default defineComponent({
    components:{
        child
    },
    setup() {
        
    },
})
</script>
