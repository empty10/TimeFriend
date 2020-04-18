<template>
    <div>
        父亲{{money}}
        <Son1  :sonMoney='money'> </Son1>
    </div>
</template>

<script>
import Son1 from './Son1'
export default {
    components:{
        Son1
    },
    data(){
        return {
            money:200
        }
    }
}
</script>