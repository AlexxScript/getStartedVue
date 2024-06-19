<template>
    <div class="container">
        computed data
        <input type="text" v-model="message">
        {{ message }}
        {{ computedData }}
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let message = ref('');
let computedData = computed(()=>{
    return message.value.split('').reverse().join('')
})

</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    color: white;
}
</style>