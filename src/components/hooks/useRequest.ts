import {ref} from 'vue'
import axios from 'axios'
export default function(url:string){
    // 加载的状态
    const loading=ref(true)
    // 请求成功的数据
    const res=ref(null)
    // 错误信息
    const err=ref('')
    // 发送请求
    axios.get(url).then((response)=>{
        // 重置加载状态
        loading.value=false
     res.value=response.data
    }).catch((error)=>{
        // 重置加载状态
        loading.value=false
     err.value=error.message
    })
    return{
     loading,res,err
    }
}