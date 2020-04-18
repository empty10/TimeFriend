<template>
    <div>
        儿子 收到 {{value}}
        <button  @click="changeMny"  >点击修改</button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
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
        }
    }
}
</script>