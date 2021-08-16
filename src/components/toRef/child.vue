<template>
    <h3>子组件</h3>
    <h3>{{name2}}</h3>
    <h3>{{length}}</h3>
</template>
<script lang="ts">
import { defineComponent, toRef ,computed,Ref} from 'vue'

export default defineComponent({
    setup(props) {
        // 定义一个获取字符串长度的方法
        const getLength=function(name:Ref){
           return computed(()=>{
               return name.value.length
           })
            
        }
        // 获取字符串的长度
        const length=getLength(toRef(props,'name2'))
        console.log(length);
        
        return{
            getLength,length
        }
    },
    props:{
        name2:{
            type:String,
            required:true
        }
    }
})
</script>
