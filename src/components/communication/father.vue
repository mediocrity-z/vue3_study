<template>
    <h1>这个是子组件</h1>
    <child></child>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import child from './grandchild.vue'
export default defineComponent({
    components:{
     child
    },
    setup() {
        
    },
})
</script>
