<template>
<!-- hook函数：组合api封装的自定义的可复用的功能函数 -->
    <h1>自定义hook函数</h1>
    <h2>x:{{x}} y:{{y}}</h2>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useMouseClick from './useMouseClick'
// 用户在页面中点击页面，把鼠标点击位置的横纵坐标收集并展示出来
export default defineComponent({
    setup() {
        // 和hook中返回的参数一致
       const {x,y}=useMouseClick()

        return{
            x,y
        }
    },
})
</script>
