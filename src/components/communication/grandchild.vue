<template>
    <h1 :style="{color}">这个是孙组件</h1>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
    setup() {
        // 注入操作
        const color=inject('color')
        return{
            color
        }
    },
})
</script>
