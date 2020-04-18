import Vue from 'vue';
import App from './App'

//向上通知自己的父级组件  dispatch
Vue.prototype.$dispatch = function (eventName,value){
    let parent = this.$parent;
    while(parent){
        parent.$emit(eventName,value);
        parent = parent.$parent; 
    }
}
//向下广播  所有的子组件   broadcast
Vue.prototype.$broadcast = function(eventName,value){
    const broadcast = (children)=>{
       children.forEach(child =>{
           child.$emit(eventName,value)
           if(child.$children){
               broadcast(child.$children)
           }
       })
    }

    broadcast(this.$children)

}


/* eslint-disable */
const vm = new Vue({
    el:'#app',
    render: h => h(App)
})
/* eslint-able */