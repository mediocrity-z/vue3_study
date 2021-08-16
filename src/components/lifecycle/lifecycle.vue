<template>
   <h1>vue3生命周期</h1>
   <br>
   <h3>这个是life父组件</h3>
   <br>
   <button @click='isShow=!isShow'>控制子组件的显示隐藏</button>
   <br>
   <child v-if="isShow"></child>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import child from './child.vue'
export default defineComponent({
    components:{
        child
    },
    setup() {
        const isShow=ref(true);
        return{
            isShow
        }
    },
})
</script>
