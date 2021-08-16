<template>
<h1>provide/inject跨组件通信</h1>
<h1>这个是祖父组件</h1>
<button @click="color='red'">红色</button>
<button @click="color='yellow'">黄色</button>
<button @click="color='green'">绿色</button>
    <fat></fat>
</template>
<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import fat from './father.vue'
export default defineComponent({
    components:{
        fat
    },
    setup() {
        const color=ref('')
        // 提供数据
        provide('color',color) //key,value
        return{
            color
        }
    },
})
</script>
