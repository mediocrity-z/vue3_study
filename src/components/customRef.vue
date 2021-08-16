<template>
    <h1>customRef</h1>
    <br>
    msg:{{msg}}
    <br>
    <br>
    <input type="text" v-model="msg">
</template>
<script lang="ts">
import { customRef, defineComponent} from 'vue'
// customRef:自定义一个ref,可以控制依赖追踪和触发响应,传入一个函数
// 函数中的两个参数为用于追踪的track和用于触发相应的trigger,并返回一个带有get()和set()函数属性的对象
// 应用场景主要有输入框的防抖等,防抖可以减少请求次数,减缓服务器压力
export default defineComponent({
    setup() {
        
        const useDebounceRef=function<T>(value:T,delay:number=200){
            // 定时器返回的id
         let timer:any
         return customRef((track,trigger)=>{
          return{
            //   返回数据
              get(){
            // 告诉vue追踪数据
            track()
            return value
              },
            //   设置数据
              set(newVal:T){
                //   清除定时器
              clearTimeout(timer)
            //   设置定时器
              timer=setTimeout(()=>{
                 value=newVal
                //  让vue更新界面
                  trigger()
              },delay)    
              }
          }
         })
        }
        const msg=useDebounceRef('欧力',500)
        return{
            msg
        }
    },
})
</script>
