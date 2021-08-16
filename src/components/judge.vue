<template>
    <h1>响应式数据的判断</h1>
</template>
<script lang="ts">
import { defineComponent, isProxy, isReactive, isReadonly, ref ,isRef} from 'vue'
// isRef:检查一个值是否是一个ref对象
// isReactive
// isReadonly
// isProxy:检查一个对象是否是reactive或readonly创建的代理对象
// 均返回布尔值
export default defineComponent({
    setup() {
        console.log(isRef(ref('')));
        
    },
})
</script>
