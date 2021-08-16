import {onBeforeUnmount, onMounted, ref } from 'vue'
export default function(){
    const x=ref(-1)
    const y=ref(-1)
    const mouseClick=function(event:MouseEvent){
    x.value=event.pageX
    y.value=event.pageY
    }
    onMounted(()=>{
        window.addEventListener('click',mouseClick)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',mouseClick)
    })
    return{
        x,y
    }
}