<template>
    <div>
        儿子 收到 {{value}}
        <button  @click="changeMny"  >点击修改</button>
        <Grandson1 :value=value  @say="say"></Grandson1>
    </div>
</template>

<script>
import Grandson1 from './Gradnson1';
export default {
    components:{
        Grandson1
    },
    props:{
        value:{
            type:Number,
            default:0
        }
    },
    methods:{
        changeMny(){
            // console.log('增加mny=400')
            // this.$emit('update:value',400)

            this.$emit('input',300)
        },
        say(){
            console.log('儿子的方法，孙子执行')
        }
    }
}
</script>