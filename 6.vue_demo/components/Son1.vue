<template>
    <div>
        儿子 收到 {{sonMoney}}
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        sonMoney:{
            type:Number,
            default:0
        }
    }
}
</script>