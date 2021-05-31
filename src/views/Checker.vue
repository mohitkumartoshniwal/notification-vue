<template>
    <div>
        checker
    </div>
</template>

<script>
import { bus } from '../main';
export default {
      created(){
         bus.$emit('checkerMounted', 10);
    }
    
}
</script>