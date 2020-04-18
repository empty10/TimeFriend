<template>
    <div>
        孙子 {{value}}
        <button @click="change"> 修改money </button>
    </div>
</template>

<script>
export default {
    props:{
        value:{
            type:Number,
            default:0
        }
    },
    methods:{
        change(){
            // this.$parent.$emit('input',300)
            console.log(800)
            this.$dispatch('input',800)
        },
        say(){
            console.log('孙子看看看看看')
        }
    }
   
}
</script>