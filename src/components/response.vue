<template>
    <h1>响应式原理</h1>
    <h1>{{obj.name}}</h1>
</template>
<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
    // 如果操作代理对象，目标对象中的数据也会随之变化，界面也会随之重新更新渲染
    setup(){
        // 目标对象
        const obj:any={
            name:'何超',
            son:{
                name:'欧力'
            }
        }
        // 把目标对象变成代理对象
        // new Proxy(target,handler)
        // target:要使用 Proxy 包装的目标对象
        // handler:处理器对象，用于监视数据以及数据的操作
        const proxyObj=new Proxy(obj,{
            // target目标对象，property获取到的属性名
        get(target,property){
            console.log('get方法被调用');
            return Reflect.get(target,property)
        },
        set(target,property,val):any{
            console.log('set方法被调用');
            return Reflect.set(target,property,val)
        },
        deleteProperty(target,property){
            console.log('删除方法被调用');
            return Reflect.deleteProperty(target,property)
        }
        })


        console.log(proxyObj.name);
        proxyObj.name='大脑'
        proxyObj.sex='男'
        delete proxyObj.sex
        // 给proxyObj的深层次对象设置属性值时，不会调用get方法，深层次对象也需要设置代理对象
        proxyObj.son.name='何超'
        console.log(proxyObj);
        
        return{
            obj,
            proxyObj
        }
    }
})
</script>
