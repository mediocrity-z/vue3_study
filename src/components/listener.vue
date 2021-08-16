<template>
    <h1>计算属性和监听</h1>
    <fieldset>
        <legend>填写基本信息</legend>
        姓氏:<input type="text" placeholder="请输入..." v-model="user.firstname"><br>
        名字:<input type="text" placeholder="请输入..." v-model="user.lastname"><br>
        年龄:<input type="text" placeholder="请输入..." v-model="user.age">
    </fieldset>
    <fieldset>
        <legend>计算属性和监听</legend>
        展示姓名:<input type="text" v-model="getName"><br>
        展示姓名:<input type="text" v-model="setName"><br>
        展示姓名:<input type="text" v-model="name">
    </fieldset>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'

export default defineComponent({
    setup() {
        const user=reactive({
            firstname:'欧',
            lastname:'力',
            age:20
        })
        // 可以通过计算属性返回user的名字，computed函数中如果只传入一个回调函数则表示get
        // 第一个姓名展示:改变上框中的姓和名，下框中的姓名也随之改变
        const getName=computed(()=>{
            return user.firstname+'·'+user.lastname
        })
        // getName返回的是一个ref对象
        console.log(getName);
        
        // 第二个姓名展示:改变下框中的姓名，上框中的姓和名发生改变
        const setName=computed({
            get(){
             return user.firstname+'·'+user.lastname
            },
            set(val:string){
                const names=val.split('·');
                user.firstname=names[0];
                user.lastname=names[1];
               
                
                
            }
        })

        // 第三个姓名展示:监视
        const name=ref('')
        // 回调函数里的参数实际上是user对象中的各个属性
        // watch(user,({firstname,lastname})=>{
        //  name.value=firstname+'·'+lastname
        // },{immediate:true,deep:true})
        // immediate会使监听默认会先执行一次，deep深度监视

        //  watchEffect，本身就会默认执行一次
        // watchEffect(()=>{
        // const names=name.value.split('·')
        // user.firstname=names[0]
        // user.lastname=names[1]
        // })

        // watch也可以监视多个对象，watch(()=>user.firstname,()=>user.lastname,()=>{},{})
        // firstname和lastname是reactive对象中的属性，要用函数来指定
        watch([()=>user.firstname,()=>user.lastname,name],()=>{console.log(111);
        },{immediate:true})
        return{
            user,
            getName,
            setName,ref,name
        }
    },
})
</script>
