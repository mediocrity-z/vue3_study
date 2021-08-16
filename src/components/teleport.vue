<template>
    <button @click="dialogOpen=true">打开对话框</button>
    <br>
    <teleport to='body'>
        <div v-if="dialogOpen">
        <div>对话框</div>
    <button @click="dialogOpen=false">关闭对话框</button>
    </div>
    </teleport>
    
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// tepeport组件:让组件的html在父组件外的特定标签中插入显示
export default defineComponent({
    setup() {
        let dialogOpen=ref(false);
        return{
            dialogOpen
        }
    },
})
</script>
