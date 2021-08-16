<template>
  <h1>异步子组件</h1>
  <h1>{{msg}}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
             resolve({
                 msg:'何超欧力'
             })
            },2000)
            
        })
    },
})
</script>
