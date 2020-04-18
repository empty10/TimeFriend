<template>
    <div>
        父亲{{money}}
        <!-- <Son1  :sonMoney='money'  @update="change"> </Son1> -->
        <!-- .sync 的写法  -->
        <Son1 :value.sync="money"></Son1>
        <!-- <Son1 v-model="money"></Son1> -->

        <!-- v-model 写法 ，自组件只能更改value,因为他是 , <input :value  :input="xxx" >的语法糖   -->
    </div>
</template>

<script>
import Son1 from './Son1'
export default {
    components:{
        Son1
    },
    created(){
         this.$broadcast('say',900)
    },
    data(){
        return {
            money:200
        }
    },
   methods:{
     
   }
}
</script>