<template>
    <div>
        maker
    </div>
</template>


<script>
import { bus } from '../main';
export default {
    created(){
        bus.$emit('makerMounted', 2);
    }
}
</script>