<template>
<sus></sus>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import setup from './components/setup/setup.vue'
// import reactive from './components/reactive.vue'
// import res from './components/response.vue'
// import lis from './components/listener.vue'
// import life from './components/lifecycle/lifecycle.vue'
// import hook from './components/hooks/hooks.vue'
// import toRefs from './components/toRefs.vue'
// import shallow from './components/shallow.vue'
// import readonly from './components/readonly.vue'
// import raw from './components/raw.vue'
// import toRef from './components/toRef/toRef.vue'
// import customRef from './components/customRef.vue'
// import grand from './components/communication/grandpa.vue'
// import judge from './components/judge.vue'
// import tel from './components/teleport.vue'
import sus from './components/suspense/suspense.vue'
export default defineComponent({
  name: 'App',
  components:{
    // setup
    // reactive
    // res
    // lis
    // life:vue3的生命周期
    // hook
    // toRefs
    // shallow
    // readonly
    // raw
    //toRef
    // customRef
    // grand
    // judge
    // tel
    sus
  }

})
</script>

<style>

</style>
