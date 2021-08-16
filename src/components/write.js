// shallowReactive:浅劫持

// 定义一个处理器对象
const handler={
    // 获取属性值
    get(target,property){
        const result=Reflect.get(target,property)
        return result
    },
    // 设置属性值或者添加属性
    set(target,property,value){
        return Reflect.set(target,property,value)
    },
    // 删除某个属性
    deleteProperty(target,property){
        return Reflect.deleteProperty(target,property)
    }

}
// 定义shallowReactive函数
function shallowReactive(target){
    // 判断当前目标对象是不是对象类型
 if(target&&typeof target ==='object'){
   return new Proxy(target,handler)
 }
 return target
}

// reactive:深劫持
function reactive(){
// 判断当前目标对象是不是对象类型
if(target&&typeof target==='object'){
    // 判断当前目标对象是否是数组
    if(Array.isArray(target)){
        target.forEach((item,index) => {
            // 对数组中的元素进行递归
            target[index]=reactive(item)
        });
    }
    else{
        Object.keys(target).forEach(key=>{
            // 对对象中的元素递归
            target[key]=reactive(target[key])
        })
    }
}
}